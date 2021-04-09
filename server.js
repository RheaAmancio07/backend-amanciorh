const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/user');
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true });

const connect = mongoose.connection;
mongoose.connection.once('open', ()=>{
    console.log('MongoDB connection establihed');
})

app.use('/user', UserRouter);
//kuhaon ang connection psring sa mngodb
app.listen(port, () => {
    console.log('Server is running at port: '+port);
});