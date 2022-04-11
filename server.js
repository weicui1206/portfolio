require("dotenv").config();
//import express from express module
const express = require("express");
//import cors  from cors module
const cors = require("cors");
//import path  from path module
const path = require("path");

const contactRoute = require("./route/contactRoute");
//call express function and put a new express into app variable
const app = express();

//create middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
