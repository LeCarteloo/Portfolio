import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
  },
  surname: {
    type: String,
    required: [true, "Please add surname"],
  },
  //! Not yet needed
  // avatar: {
  //     type: Image,
  //     required: [true, "Please add avatar"],
  // },
  links: {
    github: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  email: {
    type: String,
    required: [true, "Please add email"],
  },
  //! Not yet needed
  // activity: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: [true, "Please add email"],
  // },
  education: [
    {
      year: {
        type: String,
        required: [true, "Please add education year"],
      },
      name: {
        type: String,
        required: [true, "Please add education name"],
      },
      desc: {
        type: String,
        required: [true, "Please add description"],
      },
      place: {
        type: String,
        required: [true, "Please add place"],
      },
    },
  ],
  work: [
    {
      year: {
        type: String,
        required: [true, "Please add work year"],
      },
      name: {
        type: String,
        required: [true, "Please add work name"],
      },
      position: {
        type: String,
        required: [true, "Please add position"],
      },
      taskList: {
        type: String,
        required: [true, "Please add task list"],
      },
    },
  ],
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
  isOwner: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", userSchema);
