const dotenv = require('dotenv').config()

var admin = require("firebase-admin");

var serviceAccount = require("./" + process.env.FIREBASE_CREDENTIALS_JSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE
});

var message = {
  notification : {
    title: 'This is a test message',
    body: 'Ignore this' 
  },
  android:{
      priority:'high'
  },
  data: {
    foo: 'bar'
  },
  token: process.env.DEVICE_FCM_TOKEN
};

admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
    process.exit()
  })
  .catch((error) => {
    console.log('Error sending message:', error);
    process.exit()
  });
