import mongoose from "mongoose"

const productSchema = new.mongoose.Schema({
  description:{
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,

  },

  productImage:{
    type: String,
    

  },
   price:{
     type: String,
     default :0

  },
  stock:{
    default :0,
    type: Number,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    requird: true
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
``
  
},{timestamps:true})


export const Product = mongoose.Schema("Product",orderSchema )