const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const {Router} = require('express');
const cors = require('cors');
const path = require('path');
const routes = Router();

const serviceAccount = require('./secretKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL,
});

const PORT = +process.env.PORT || 5000;
//const publicPath = path.join(__dirname,"..","public");

const app = express();

//app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"],
      optionsSuccessStatus: 200,
    })
  );
 /* app.get('*', function(request, response) {
    response.sendFile(path.join(publicPath,"index.html"));
  });*/
app.get('/',(req,res) => {
  res.send('Hello, 5000');
})

app.get('/test',(req,res) => {
  res.send('Hello, test');
  console.log('Test')
})


app.post('/clients', (req, res) => {
  console.log('yes ')
  admin.auth().deleteUser(...Object.keys(req.body))
    .then(() => {
      admin.firestore().collection('users').doc(...Object.keys(req.body)).delete()
    })
    .catch(error => {
      console.log(error);
    })
});


app.listen(PORT, () => {
    console.log('Server working')
})