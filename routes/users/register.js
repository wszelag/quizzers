const User = require("../../models/User");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
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
};

module.exports = register;
