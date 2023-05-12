const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).send("Logged Out Successfully!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { logout };
