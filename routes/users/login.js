const User = require("../../models/User");
const { validationResult } = require("express-validator");

const login = async (req, res) => {
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
      return res.status(401).json({
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
};

module.exports = login;
