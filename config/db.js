// Set the connection string based from the config vars of the production server



// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:false
    });
    console.log(`connected: ${conn.connection.host}`);
  } catch (error) {

    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;