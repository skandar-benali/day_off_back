import { Schema, model } from "mongoose";
import TeamSchema from "./shape";

const Team = new Schema(TeamSchema, {
  collection: "teams",
  timestamps: { currentTime: () => Date.now() },
  strict: true
});

export default model("teams", Team);
