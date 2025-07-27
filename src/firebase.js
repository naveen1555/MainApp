const admin = require("firebase-admin");
const serviceAccount = require("./firebaseServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://brightenter-f7f77-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();
module.exports = db;
