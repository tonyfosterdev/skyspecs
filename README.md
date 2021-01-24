# Gist Viewer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

1. Installed dependencies: `npm install`
1. Start Postgres: `docker-compose up -d`
1. Run the application: `npm run start`

### Troubleshooting

You may get node-gyp errors when running npm install. If this is the case, you may need to install
g++ and build-essentials.

## Features

The following items are available in the application for use by developers.

### GraphQL

Thie application features a GraphQL API. Graphiql is available at \
[http://localhost:5000/graphql](http://localhost:5000/graphql)

### Postgres

Postgres may be started with `docker-compose up -d`. If you have your own instance setup, you may configure it in `.env`.

### PgAdmin

PgAdmin is available at `http://localhost:5050`. You may find the credentials in the `docker-compose.yaml` file.

### File Structure

All source files are under `/src`. Server side files are under `/src/server`.  

With more time, I would restructure the application so that all client files are under `/src/client` and server files\
under `/srv/server`. 

### Missing Features

Ugh. It didn't all get done. 
1. The ability to save query favorites.
1. Paging large numbers of items. The page limits are set by the GitHub API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Under the hood, this calls `npm start-server` and `npm start-client` concurrently.

### `npm start-client`

Runs the client app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start-server`

Runs the server app in the development mode.\
Open [http://localhost:5000/graphql](http://localhost:5000/graphql) to view Graphiql it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
