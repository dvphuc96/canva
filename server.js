const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { mongo, default: mongoose } = require("mongoose");
dotenv.config();
if (process.env.NODE_ENV === "local") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}

//connect db

const dbConnect = async () => {
  try {
    if (process.env.NODE_ENV === "local") {
      await mongoose.connect(process.env.LOCAL_DB_URI);
      console.log("Local Database Is Connected...");
    } else {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Production Database Is Connected...");
    }
  } catch (error) {
    console.log("Database Connection Failed");
  }
};
dbConnect();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
