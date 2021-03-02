const User = require("../../models/User");
const { validationResult } = require("express-validator");

const changePassword = async (req, res) => {
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
};

module.exports = changePassword;
