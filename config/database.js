const mongoose = require('mongoose');
console.log()
mongoose.connect("mongodb+srv://GiselleMR:711763Rmg@cluster0.f603j8n.mongodb.net/mongoose-flights?retryWrites=true&w=majority");

// shortcut var to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});