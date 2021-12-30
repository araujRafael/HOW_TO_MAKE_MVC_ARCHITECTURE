const { Users } = require("../model/user.schemas");
const { v4: uuid } = require("uuid");

class UserController {
  // GET
  async getAllUsers(req, res) {
    const UserCollection = Users.db.collection("users");
    const usersArr = await UserCollection.find({}).toArray();
    if (!usersArr) {
      res.status(400).json({
        error: "No users yet!",
      });
      return;
    }
    res.status(200).json(usersArr);
  }
  async getUserById(req, res) {
    const { id } = req.params;
    const usersId = await Users.findOne({ uuid: id }).exec();
    if (!usersId) {
      res.status(400).json({
        error: "User not found",
      });
      return;
    }
    res.status(200).json(usersId);
  }
  // POST
  createUser(req, res) {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      res.status(400).json({
        error: "Empety filds!",
      });
      return;
    }
    Users.create({
      uuid: uuid(),
      email,
      name,
      password,
    });
    res.status(200).json({
      message: "User is been created!",
    });
  }
  // PUT
  async editPass(req, res) {
    const { uuid } = req.headers;
    const newPassword = req.body.password;
    const usersId = await Users.findOne({ uuid }).exec();
    if (!usersId) {
      res.status(400).json({
        error: "User not found",
      });
      return;
    }
    if (!newPassword) {
      res.status(400).json({
        error: "Empety fild!",
      });
      return;
    }
    try {
      const updatePass = { password:newPassword };
      await Users.findOneAndUpdate({uuid}, updatePass).exec();
      res.status(200).json({
        message: "Your password has been successfully edited",
      });
    } catch (err) {
      res.status(400).json({
        error: err,
      });
      return;
    }
  }
  // DELETE
  async deleteUser(req, res) {
    const { uuid } = req.headers;
    try {
      const user = await Users.findOneAndRemove({ uuid }).exec();
      if (!user) {
        res.status(400).json({
          error: "User not found",
        });
        return;
      }
      res.status(200).json({ message: "user deleted" });
      // redirect
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  }
  //POST
  async loginUser(req, res) {
    const { email, password } = req.body;
    const userExist = await Users.findOne({email}).exec()
    if(!userExist){
      res.status(400).json({error: "Access denied"})
      return
    }
    if(userExist.password===password){
      res.status(200).json({message:"Login successfully"})
      return
    }else{
      res.status(400).json({error: "Access denied"})
      return
    }
  }
}
module.exports = { UserController };
