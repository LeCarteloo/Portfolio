import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
    unique: true,
  },
  hours: {
    type: Number,
  },
  //! Not yet nedeed
  // tasks: [],
  team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add user id"],
      ref: "Users",
    },
  ],
  links: {
    live: {
      type: String,
    },
    repo: {
      type: String,
    },
  },
  //! Not yet needed
  //   photo: {
  //     type: Image,
  //     required: [true, "Please add image"],
  //   }
  technologies: [
    {
      name: {
        type: String,
        required: [true, "Please add tech name"],
      },
      icon: {
        type: String,
        required: [true, "Please add tech icon"],
      },
      type: {
        type: String,
        enum: ["language", "tool"],
        required: [true, "Please add tech type"],
      },
    },
  ],
  colors: [
    {
      type: String,
      required: [true, "Please add colors"],
    },
  ],
  content: {
    type: String,
    required: [true, "Please add content"],
  },
  desc: {
    type: String,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Project", projectSchema);
