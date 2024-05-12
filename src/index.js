// require('dotenv').config({path: './env'})

// 2nd approch
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()



// 1st approch
/*
import express from "express";
const app = express();)

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();
*/