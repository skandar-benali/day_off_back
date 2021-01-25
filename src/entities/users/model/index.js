import { Schema, model } from "mongoose";
import UserSchema from "./shape";

const Users = new Schema(UserSchema, {
  collection: "users",
  timestamps: { currentTime: () => Date.now() },
  strict: true
});

export default model("users", Users);
