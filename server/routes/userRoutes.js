const express = require("express");
const {
  loginController,
  registerController,
} = require("./../controllers/userController");

const router = express.Router();

//routes
//Method - get
router.post("/login", loginController);

//MEthod - POST
router.get("/", (req, res) => {
  res.send("Users API is working!");
});

router.post("/register", registerController);

module.exports = router;
