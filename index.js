const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const connectDB = require("./config/db");
const { authUser } = require("./controllers/userControllers");

require("dotenv").config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use("/api/user", userRoutes);
app.use("/api/user/login", authUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
