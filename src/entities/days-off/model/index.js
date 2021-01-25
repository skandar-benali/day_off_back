import { Schema, model } from "mongoose";
import DayOffSchema from "./shape";

const dayOff = new Schema(DayOffSchema, {
  collection: "daysOff",
  timestamps: { currentTime: () => Date.now() },
  strict: true
});

export default model("daysOff", dayOff);
