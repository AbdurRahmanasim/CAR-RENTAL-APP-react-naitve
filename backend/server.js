const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Local Variables...
const app = express();
const PORT = 5000;


// Router's Connectivity... 
const router = require("./routes/routes");


// Front-end to Back-end Communication...
app.use(cors());


//Allow body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// DB Connection
const DBURI = "mongodb+srv://admin:admin@cluster0.zrhxsty.mongodb.net/test";
mongoose.connect(DBURI);
mongoose.connection.on("connected", () => {console.log("DB is connected")});
mongoose.connection.on("error", (error) => {console.log("not connected")});


// All Routes | API's...
app.use(router);


// Server Listening
app.listen(PORT, () => console.log(`Server is running on localhost : ${PORT}`));
