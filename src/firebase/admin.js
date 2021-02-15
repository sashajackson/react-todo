var admin = require("firebase-admin");

var serviceAccount = 'firebase-adminsdk-2ihoy@glco-19bf1.iam.gserviceaccount.com';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://glco-19bf1.appspot.com/images"
});

var bucket = admin.storage().bucket();

module.exports = bucket;