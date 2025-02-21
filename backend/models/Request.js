import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["OutPass", "IDCard", "Event", "MessToken"], required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
}, { timestamps: true });

const Request = mongoose.model("Request", requestSchema);
export default Request;
