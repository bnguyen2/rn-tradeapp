## Quickstart

1. To add new tables, in `docker-compose.yaml` set `HASURA_GRAPHQL_ENABLE_CONSOLE` to `false` then restart services

2. Execute the command `hasura console --admin-secret secret` in the hasura project directory

3. hasura will open a new graphiql interface to http://localhost:9695/. As you make changes to your schema, files are automatically generated in the `migrations/` directory

4. Apply all migrations present in the `migrations/` directory on a new instance at http://another-graphql-instance.com

5. Check status of migration: in hasura project directory
   `hasura migrate status --admin-secret secret`
