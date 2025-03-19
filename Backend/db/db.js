const mongoose = require('mongoose');

function connectTODB() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('connected to db'))
        .catch(err => console.error('Could not connect to db', err));
}


module.exports=connectTODB;