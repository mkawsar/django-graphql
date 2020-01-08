import graphene
from graphene_django.types import DjangoObjectType
from books.models import Book
from author.models import Author
from graphql_jwt.decorators import login_required


class BookType(DjangoObjectType):
    class Meta:
        model = Book


class Query(graphene.ObjectType):
    book_list = graphene.List(BookType)
    book = graphene.Field(BookType, id=graphene.Int())

    def resolve_book_list(self, info, **kwargs):
        return Book.objects.all().order_by('title')

    def resolve_book(self, info, **kwargs):
        book_id = kwargs.get('id')
        if book_id is None:
            return None
        else:
            try:
                return Book.objects.get(pk=book_id)
            except Exception:
                return None


class CreateBook(graphene.Mutation):
    book = graphene.Field(BookType)

    class Arguments:
        title = graphene.String(required=True)
        generic = graphene.String(required=True)
        author_id = graphene.Int(required=True)

    def mutate(self, info, title, generic, author_id):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('You are not logged in!')
        book = Book.objects.create(title=title, generic=generic, author=Author.objects.get(pk=author_id))
        return CreateBook(book=book)


class Mutation(graphene.ObjectType):
    create_book = CreateBook.Field()
