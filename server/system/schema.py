import graphene
import graphql_jwt
import author.schema
import books.schema
import users.schema


class Query(author.schema.Query,
            books.schema.Query,
            users.schema.Query,
            graphene.ObjectType):
    pass


class Mutation(author.schema.Mutation,
               books.schema.Mutation,
               users.schema.Mutation,
               graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
