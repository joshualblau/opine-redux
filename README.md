# OpineRedux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

Everything that applies to [Angular CLI](https://github.com/angular/angular-cli)-generated projects also applies to this project.

## Backend

The backend of this application uses Node Express.js. The [server.js](./server.js) file in the root directory points to the [api file](./server/routes/api.js) in the server folder (also in the root directory).

Because of this, rather than starting the application as a whole by going through Angular (i.e. ng serve), the application must be built (through ng build) and then run from the Node [server.js](./server.js) file.
