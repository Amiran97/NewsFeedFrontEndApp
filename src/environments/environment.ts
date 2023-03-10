// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IMAGE_URL: 'http://localhost:5000/Images/',
  API_URL: 'http://localhost:5000/api/v1',
  ACCOUNT_API_URL: 'Auth',
  POST_API_URL: 'Post',
  COMMENT_API_URL: 'Comment',
  POST_LIKE_API_URL: 'Like/Post',
  COMMENT_LIKE_API_URL: 'Like/Comment',
  encryptSecretKey: 'd3b2cc0c-db8c-4dec-a25a-e1179ac30025'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
