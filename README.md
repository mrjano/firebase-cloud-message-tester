# firebase-cloud-message-tester

A simple script to test firebase FCM notifications

## Running Locally

Create your own .env file, required params are:
- FIREBASE_CREDENTIALS_JSON: Google [credentials JSON](https://firebase.google.com/docs/cloud-messaging/auth-server#provide-credentials-manually)
- FIREBASE_DATABASE: Firebase database url
- DEVICE_FCM_TOKEN: The device you want to test, you can get this token through the [client SDK](https://firebase.google.com/docs/cloud-messaging/android/client)

```
$ npm install
$ npm start
```
