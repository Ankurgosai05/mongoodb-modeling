import mongoose from "mongoose"

const medical_recordSchema= new.mongoose.Schema({

},{timestamps: true})

export const MedicalRecored = mongoose.Schema("MedicalRecored",medical_recordSchema)