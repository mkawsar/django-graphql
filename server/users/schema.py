import graphene
from django.contrib.auth import get_user_model
from graphene_django.types import DjangoObjectType
from graphql_jwt.decorators import login_required


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.AbstractType):
    me = graphene.Field(UserType)
    users = graphene.List(UserType)
    user = graphene.Field(UserType, id=graphene.Int())

    @login_required
    def resolve_users(self, info):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('Not logged in!')

        return get_user_model().objects.all()

    @login_required
    def resolve_me(self, info):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('Not logged in!')
        return user

    @login_required
    def resolve_user(self, info, **kwargs):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('You are not logged in!')
        user_id = kwargs.get('id')
        if user_id is None:
            print('user_id')
            return None
        else:
            try:
                return get_user_model().objects.get(pk=user_id)
            except Exception:
                return None


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String()
        password = graphene.String(required=True)

    def mutate(self, info, username, email, first_name, last_name, password):
        user = get_user_model()(username=username, email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
