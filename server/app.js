const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



const serviceAccount = require('./secretKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eshop-app-3603f.firebaseio.com"
});

const PORT = +process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"],
      optionsSuccessStatus: 200,
    })
  );




app.listen(PORT, () => {
    console.log('Server working')
})