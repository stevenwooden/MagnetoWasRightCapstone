'use strict';

const Mongoose = require('mongoose');
// if the connection fails, try 127.0.0.1 instead oflocalhost below

const mongoURI = process.env.DB_URI || "mongodb://localhost:27017/magneto_was_right";

// Connect to MongoDB

Mongoose.connect(mongoURI)
.then(() => console.log('MongoDB Connected'))
.catch(error => console.log('MongoDB Error:'+error.message));
// Get the default connection
const db = Mongoose.connection;
// Bind connection to error event (to get notification of connection errors)

db.on("error", console.error.bind(console, "MongoDBconnection error:"));


exports.Mongoose = Mongoose;