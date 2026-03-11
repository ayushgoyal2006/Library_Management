const mongoose = require("mongoose");
console.log(process.env.MONGO_URI)
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ayush:lAuCmRmo9zZkRM9q@cluster0.tzdgjlb.mongodb.net/?appName=Cluster0");

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;