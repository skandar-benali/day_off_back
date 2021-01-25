import { Schema, model } from "mongoose";
import DepartmentSchema from "./shape";

const Department = new Schema(DepartmentSchema, {
  collection: "departments",
  timestamps: { currentTime: () => Date.now() },
  strict: true
});

export default model("departments", Department);
