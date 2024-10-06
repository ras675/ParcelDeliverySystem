const User = require("../models/User");

//Deleting user
 const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("The user has been deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all user
 const getAllUser = async (req, res) => {
  try {
    const users = await User.find.sort({ createdat: -1 });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {getAllUser,deleteUser}