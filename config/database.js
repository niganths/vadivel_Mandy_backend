const mongoose = require('mongoose');

const connectDatabase = () => {
    
    mongoose.set('strictQuery', false);

    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    }).catch(error => {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    });
};

module.exports = connectDatabase;