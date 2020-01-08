import graphene
from django.contrib.auth import get_user_model
from graphene_django.types import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.AbstractType):
    users = graphene.List(UserType)
    user = graphene.Field(UserType, id=graphene.Int())
    me = graphene.Field(UserType)

    def resolve_users(self, info, **kwargs):
        return get_user_model().objects.all()

    def resolve_user(self, info, **kwargs):
        user_id = kwargs.get('id')
        if user_id is None:
            return None
        else:
            try:
                return get_user_model().objects.get(pk=user_id)
            except Exception:
                return None

    def resolve_me(self, info, **kwargs):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('Not logged in!')

        return user


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
