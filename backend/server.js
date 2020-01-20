const express = require('express');

const mongoose = require('mongoose');

const config = require('config');

const app = express();
app.use(express.json());

const port = process.env.PORT||3000;

const uri = config.get('ATLAS_URI');

mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB connection has been established successfully");
});

app.listen(port, ()=> {
    console.log(`Your server is running on port: ${port}`);
});