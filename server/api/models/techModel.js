import mongoose from "mongoose";

const techSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
    unique: true,
  },
  icon: {
    type: String,
    required: [true, "Please add icon"],
  },
  type: {
    type: String,
    enum: ["language", "tool"],
    required: [true, "Please add type"],
  },
});

export default mongoose.model("Technology", techSchema);
