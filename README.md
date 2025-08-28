# React + NodeJS + MongoDB

This is a full-stack application using React for the frontend, NodeJS for the backend, and MongoDB as the database.

## Usage

### Development

To start the development server, run:

`npm run dev`

This will start the React development server on port 5137 and the NodeJS server on port 3000. The MongoDB connection string is set to the default value.

The first API call to `http://localhost:3000/api/` will create the first pricing card data and then fetch it.

### Production

To start the production server, run:

`npm start`

This will start the NodeJS server on port 3000 and use the MongoDB connection string from the `MONGODB_URI` environment variable.

The React application will be served from `http://localhost:3000/`.

## Environment Variables

The following environment variables can be set:

* `MONGODB_URI`: The MongoDB connection string.
* `PORT`: The port number to use for the NodeJS server. Defaults to 3000.
* `REACT_APP_API_URL`: The URL of the API. Defaults to `http://localhost:3000/api/`.

## API

The API is located at `http://localhost:3000/api/`. The following endpoints are available:

* `GET /`: Returns the pricing card data.
* `POST /`: Creates a new pricing card with the given data.
