const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');



const PORT = 5000;

const app = express();

//app.engine()



app.listen(PORT, () => {
    console.log('Server working')
})