import mongoose from "mongoose"

const doctorSchema= new.mongoose.Schema({

  name:{
    type: String,
    required: true,
  },
  salary:{
    type: String,
    required: true,
  },
  qualification:{
    type: String,
    required: true,
  },
  exprinceinyears:{
    type: Number,
    default: 0,

  }, workinhospital:

  [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    },
    
  ]
  

},{timestamps: true})

export const Doctor = mongoose.Schema("Doctor",doctorSchema)

