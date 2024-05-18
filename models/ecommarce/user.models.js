import mongoose from "mongoose"

const userSchema  = new.mongoose.Schema({

  username:{
    type: String,
    reqired: true,
    unique : true,
    lowercase: true,
  },

  email:{

    type: String,
    reqired: true,
    unique : true,
    lowercase: true,

  },
  
  password:{
    type: string,
    required : true,
  },

},{timestamps:true})


export const Order = mongoose.Schema("Order",orderSchema )