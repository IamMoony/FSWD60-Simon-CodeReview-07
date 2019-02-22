// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebaseConfig: {
    apiKey: "AIzaSyBwfd2zycOjGXykpD2H7jEYHat1bfLOl9Y",
    authDomain: "myphonebook-b41ce.firebaseapp.com",
    databaseURL: "https://myphonebook-b41ce.firebaseio.com",
    projectId: "myphonebook-b41ce",
    storageBucket: "myphonebook-b41ce.appspot.com",
    messagingSenderId: "177752802105"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
