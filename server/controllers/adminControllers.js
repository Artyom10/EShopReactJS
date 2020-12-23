/*const admin = require('firebase-admin');

 //console.log(...Object.keys(req.body))
 exports.deleteAdminUser = function (req,res) {
 admin.auth().deleteUser(...Object.keys(req.body))
 .then(() => {
   admin.firestore().collection('users').doc(...Object.keys(req.body)).delete()
 })
 .catch(error => {
   console.log(error);
 })
};*/