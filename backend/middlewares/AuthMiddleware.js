const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  console.log("Cookies:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    console.log("No token found");
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("JWT Error:", err);
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);

    if (user) {
      console.log("Verified:", user.username);
      return res.json({ status: true, user: user.username });
    }

    return res.json({ status: false });
  });
};