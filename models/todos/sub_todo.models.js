import mongoose from "mongoose"

const Sub_todoSchema = new mongoose.Schema({

  content:{
    type: String,
    required:true,
  },
  complete:{
    type: Boolean,
    default : false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true})


export  const SubTodo = mongoose.Schema("SubTodo", Sub_todoSchema)