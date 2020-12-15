const express = require('express');
//const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');

let adminRouter = require("./routes/adminRouter");

const PORT = 5000;

const app = express();


app.use("/", adminRouter);

app.get('/', (req, res) => {
    res.send('"What do you need on this server?')
})



app.listen(PORT, () => {
    console.log('Server working')
})