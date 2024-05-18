import mongoose from "mongoose"

const userSchema= new mongoose.Schema(
{
   username :{
     type: String,
     required : true,
     unique : true,
     lowercase: true,
   },
   email:{
    type: String,
    required : true,
    unique : true,
    lowercase: true,

   },
   password:{
    type: String,
    required : [true, "password is required"],
    
   }
},{timestamps:true}
  )


export const User = mongoose.model("User",userSchema) 


// export const User = mongoose.model("User",userSchema) aanma "User"   ae database mongodb ma store thase aetle aenu name users thai jase