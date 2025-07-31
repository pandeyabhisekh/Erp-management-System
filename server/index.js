const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("colors");

const connectDb = require("./config/config");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDb();

// Create Express app
const app = express();

// Middleware
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));

// Default route
app.get("/", (req, res) => {
  res.send("ERP System Backend API is running.");
});
app.use(express.static("public"));
// 404 Not Found handler

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});
