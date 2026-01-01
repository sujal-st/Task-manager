import mongoose from "mongoose"
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type:String, required: [true, "Please provide a name"]},
    email:{type: String, required:[true, "Please provide a email"], unique: true, lowercase: true},
    password: {type: String, required:[true, "Please provide a password"]},
},{ timestamps: true })



module.exports = mongoose.model("user", userSchema);