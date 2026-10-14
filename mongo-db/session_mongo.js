import mongoose from "mongoose";

export default mongoose.model("Session", new mongoose.Schema({
    username: { type: String, required: true },
    authToken: { type: String, required: true },
    open: { type: Date },
    closed: { type: Date },
    role: { type: String },
}));