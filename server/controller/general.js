import User from "../models/User.js";

//this is a typical app express
//we have req which is where you can
// get the param in the body
// send to the front end or who call api
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
