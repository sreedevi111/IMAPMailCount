// import { authorize as appAuthAuthorize } from 'react-native-app-auth';

// const config = {
//   issuer: 'https://accounts.google.com',
//   // clientId: '700365726774-17feq1fk7m16obhp99sfb9eg72kc0vvp.apps.googleusercontent.com',
//   clientId: '7E:A7:08:7F:16:0D:98:AD:34:1E:71:D5:9F:90:AB:F3:EE:A2:B9:82',
//   redirectUrl: 'http://localhost:3000/auth/callback',
//   scopes: ['openid', 'profile', 'email'],
// };

// export const authorize = async () => {
//   try {
//     const result = await appAuthAuthorize(config);
//     console.log("result:::::::::::::::::::::::::::::",result);
//     return result;  // Return the result to the calling function
//   } catch (error) {
//     console.log("error:::::::::::::",error);
//     throw error;  // Throw the error so it can be caught by the calling function
//   }
// };

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '700365726774-vjl6sklmpgfgllltjgqq9vsucmj8fpq5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});
