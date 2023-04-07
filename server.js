const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require('path')

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin",require("./routes/adminRoutes"));
app.use("/api/v1/doctor",require("./routes/doctorRoutes"));

//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

// Set the port number
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgCyan);
});
