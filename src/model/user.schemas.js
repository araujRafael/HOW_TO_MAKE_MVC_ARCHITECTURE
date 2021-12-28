const {mongoose} = require('./db.connect')
const { Schema } = mongoose;

const UsersSchema = new Schema({
  uuid:{
    type:String,
    required:true,
  },
  name: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
},{
  timestamps:true,
});
const Users = mongoose.model('users',UsersSchema)
module.exports={Users}