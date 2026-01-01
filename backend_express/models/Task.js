import express from "express"
import mongoose from "mongoose"

const Schema = mongoose.Schema;


const taskSchema = new Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "user"},
    title:{ type: String, required: [true,"Please provide a task title"]},
    description:{ type: String, default: ""},
    status: {type: String, enum: ["Pending","In Progress", "Completed"], default: "Pending"},
    priority: {type:String, enum:["Low","Medium","High"], default: "Medium"},
    dueDate:{type: Date},
    createdAt:{type: Date, default: Date.now},
})

module.exports = mongoose.model("task", taskSchema)