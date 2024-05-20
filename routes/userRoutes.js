const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser);
router.get("/", allUsers);

module.exports = router;
