import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },
  },
  { timeStamps: true }
);

export const User = mongoose.model("User", userSchema);
