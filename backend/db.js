const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/"

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

module.exports = connectToMongo;
