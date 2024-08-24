import mongoose from "mongoose";

const empSchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    salary:{type:Number,required:true},
})

const empModel=mongoose.model('Eemployee',empSchema)

export default empModel
//document na banaune ani model lai controllers folder ko file ma import garne