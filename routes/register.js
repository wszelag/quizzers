const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = Router();

//REGISTER
router.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("name", "Name should contain max. 10 characters").isLength({ max: 10 }),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password should contain 6 or more characters").isLength({
    min: 6
  }),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const { email, name, password } = req.body;
    try {
      const isUserAlreadyExists = await User.findOne({ email });

      if (isUserAlreadyExists) {
        return res.status(400).json({
          errors: [{ msg: "User is already exist" }]
        });
      }

      const user = new User({
        name,
        email,
        password
      });

      await user.save();

      res.status(200).json({
        user
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: "Server error"
      });
    }
  }
);

module.exports = router;
