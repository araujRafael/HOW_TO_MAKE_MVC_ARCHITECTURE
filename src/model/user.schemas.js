const {mongoose} = require('./db.connect')
const { Schema } = mongoose;

const UsersSchema = new Schema({
  uuid:{
    type:String
  },
  name: {
    type:String,

  },
  email:{
    type:String
  },
  password:{
    type:String
  }
},{
  timestamps:true,
});
const Users = mongoose.model('users',UsersSchema)
module.exports={Users}