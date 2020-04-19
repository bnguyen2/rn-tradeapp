## Quickstart

1. Execute the command `hasura console --admin-secret <admin-secret>` in the hasura project directory

2. hasura will open a new graphiql interface to http://localhost:9695/. As you make changes to your schema, files are automatically generated in the `migrations/` directory

3. Apply all migrations present in the `migrations/` directory on a new instance at http://another-graphql-instance.com

4. Check status of migration: in hasura project directory
   `hasura migrate status`
