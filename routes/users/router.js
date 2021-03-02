const { Router } = require("express");
const { check } = require("express-validator");
const register = require("./register");
const login = require("./login");
const deleteAccount = require("./delete");
const changePassword = require("./changePassword");

const router = Router();

//REGISTER
router.post(
  "/register",
  check("name", "Name is required").notEmpty(),
  check("name", "Name should contain max. 10 characters").isLength({ max: 10 }),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password should contain 6 or more characters").isLength({
    min: 6
  }),
  (req, res) => register(req, res)
);

//LOGIN
router.post(
  "/login",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password should contain 6 or more characters").isLength({
    min: 6
  }),
  (req, res) => login(req, res)
);

//DELETE ACCOUNT
router.delete(
  "/delete",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password should contain 6 or more characters").isLength({
    min: 6
  }),
  (req, res) => deleteAccount(req, res)
);

//CHANGE PASSWORD
router.patch(
  "/change",
  check("password", "Password should contain 6 or more characters").isLength({
    min: 6
  }),
  (req, res) => changePassword(req, res)
);

module.exports = router;
