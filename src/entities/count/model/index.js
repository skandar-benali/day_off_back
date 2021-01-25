import { Schema, model } from "mongoose";
import CountShape from "./shape";

const Count = new Schema(CountShape, {
  collection: "count",
  strict: true
});

export default model("count", Count);
