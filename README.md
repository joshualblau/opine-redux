# Current Status

## Message writing and sending

This app still needs to be integrated with democracy.io's app (they have no up-to-date API) to send messages. There is currently a placeholder for this functionality.

## User tailoring

The backend is currently under construction, and will soon enable user account CRUD.

# Build Notes

## Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

Everything that applies to [Angular CLI](https://github.com/angular/angular-cli)-generated projects also applies to this project.

## Backend

The backend of this application uses Node.js [Express](https://expressjs.com/). The [server.js](./server.js) file in the root directory points to the [api file](./server/routes/api.js) in the server folder (also in the root directory).

Because of this, rather than starting the application as a whole by going through Angular (i.e. ng serve), the application must be built (through ng build) and then run from the Node [server.js](./server.js) file.
