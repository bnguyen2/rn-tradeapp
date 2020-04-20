## Quickstart

1. npm install -g expo-cli

2. cd project directory, then `docker-compose up -d`. This will spin up a local instance of hasura, db and auth service

3. cd into react-native `/app` directory, then `npm start`

4. In app directory, update `api.js` with your computer's ip address to enable network requests to the server from your physical device and emulator

## Folder Structure

1. When adding a new folder to src, make sure to update alias for new path in `babel.config.js`. Restart the server to have up and running correctly
