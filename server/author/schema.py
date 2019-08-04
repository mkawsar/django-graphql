import graphene
from graphene_django.types import DjangoObjectType

from author.models import Author
from books.schema import BookType


class AuthorType(DjangoObjectType):
    books = graphene.List(BookType)

    class Meta:
        model = Author
        exclude_fields = ('book_set',)

    def resolve_books(self, info, **kwargs):
        return self.book_set.all()


class Query(graphene.ObjectType):
    authors = graphene.List(AuthorType)
    author = graphene.Field(AuthorType, id=graphene.Int())

    def resolve_authors(self, info, **kwargs):
        return Author.objects.all().order_by('name')

    def resolve_author(self, info, **kwargs):
        author_id = kwargs.get('id')

        if author_id is None:
            return None
        else:
            try:
                return Author.objects.get(pk=author_id)
            except Exception:
                return None


class CreateAuthor(graphene.Mutation):
    author = graphene.Field(AuthorType)

    class Arguments:
        name = graphene.String(required=True)
        age = graphene.String(required=True)

    def mutate(self, info, name, age):
        author = Author.objects.create(name=name, age=age)
        return CreateAuthor(author=author)


class Mutation(graphene.ObjectType):
    create_author = CreateAuthor.Field()
