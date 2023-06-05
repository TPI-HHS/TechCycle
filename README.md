## Tech-Cycle Server backend

### Description

This is the backend for the Tech-Cycle project. It is a Node.js server that uses Express.js to handle requests and
Postgres as a database.

### Requirements

- Node.js
- Postgres

### Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a .env file in the root directory and add the following variables:

````
DB_HOST=
DB_NAME=
DB_PORT=
DB_USER=
DB_PASSWORD=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
````

Fill in the variables with the correct values. The DB variables are for the Postgres database.

- DB_HOST: The host of the database
- DB_NAME: The name of the database
- DB_PORT: The port of the database
- DB_USER: The user of the database
- DB_PASSWORD: The password of the database
- ACCESS_TOKEN_SECRET: The secret for the access token you can generate with
    - `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`
- REFRESH_TOKEN_SECRET: The secret for the refresh token you can generate with
    - `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

4. Run the server with `npm run dev`

### API

The API is documented in the [API.md](API.md) file.

[]: # Path: client\README.md
