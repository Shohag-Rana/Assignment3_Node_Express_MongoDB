import express from 'express';
import mongoose from "mongoose"
import { join } from 'path';
// import connectDB from './db/connectdb.js';
import web from "./routes/web.js";
const app = express()
const port = process.env.PORT || '3000'
import bodyParser from 'body-parser';
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//database connection
var mongoAtlasUri = "mongodb+srv://shohag:admin@blogproject.oo9aahz.mongodb.net/demoDB"
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }


app.use(express.urlencoded({extended:false}))

//static files
app.use(express.static(join(process.cwd(), "public")))

//image
app.use(express.static("upload"))

//load routes
app.use("/", web);

//set template engine
app.set("view engine", "ejs");

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})