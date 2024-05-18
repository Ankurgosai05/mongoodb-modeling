import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({

  content:{
  type :String,
  required: true,
  },
  complete:{
    type : Boolean,
    default : false
  },

  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"

  },
  subTodos:[
    {
    type : mongoose.Schema.Types.ObjectId,
    ref : SubTodo
    }
  ] // array of sub_todos



   
},{timestamps:true}
  )


export const User = mongoose.model("User",userSchema) 


// export const User = mongoose.model("User",userSchema) aanma "User"   ae database mongodb ma store thase aetle aenu name users thai jase
  }
},{timestamps:true})


export const Todo = mongoose.model("Todo", todoSchema)