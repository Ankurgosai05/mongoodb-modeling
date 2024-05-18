import mongoose from "mongoose"

const orderItemSchema = new.mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity:{
    type:Number,
    reqired: true,
  }
})
const orderSchema = new.mongoose.Schema({

  orderPrice:{
    type: Number,
    required: true,

  },
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",

  },

  orderItems:{
    type:[orderItemSchema]
  }
  ,address:{

    type:String,
    required: true,
  },

  status:{
    type: String,
    enum: ["pending","cancled","uccesfull"],
    default: "pending"
  }
  

},{timestamps:true})


export const User = mongoose.Schema("User",orderSchema )