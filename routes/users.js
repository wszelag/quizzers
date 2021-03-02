const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

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

//LOGIN
router.post(
  "/login",
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

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "User doesn't exist. Check your email." }]
        });
      }

      if (user.password !== password) {
        return res.status(400).json({
          errors: [{ msg: "Invalid password, try again" }]
        });
      }

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

//DELETE ACCOUNT
router.delete(
  "/delete",
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

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "User doesn't exist. Check your email." }]
        });
      }

      if (user.password !== password) {
        return res.status(400).json({
          errors: [{ msg: "Invalid password, try again" }]
        });
      }

      await User.deleteOne({ email });
      res.status(200).json({
        msg: "Your account has been deleted"
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: "Server error"
      });
    }
  }
);

//CHANGE PASSWORD
router.patch(
  "/change",
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

    const { email, password, newPassword } = req.body;
    try {
      const user = await User.findOne({ email });

      if (user.password !== password) {
        return res.status(400).json({
          errors: [{ msg: "Invalid password, try again" }]
        });
      }

      if (password === newPassword) {
        return res.status(400).json({
          errors: [{ msg: "Password are the same" }]
        });
      }

      await User.updateOne({ email }, { password: newPassword });
      res.status(200).json({
        msg: "Your password has been changed"
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
