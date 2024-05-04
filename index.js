const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const connectDB = require("./config/db");
const { authUser } = require("./controllers/userControllers");

require("dotenv").config();

connectDB();
const app = express();
app.use(express.json());

// Define CORS options
const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Origin",
    "Accept",
  ],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE", // Allowed HTTP methods
};

// Enable CORS with specific options
app.use(cors(corsOptions));

const port = process.env.PORT;

app.use("/api/user", userRoutes);
app.use("/api/user/login", authUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
