import { Schema, model } from "mongoose";
import CountrySchema from "./shape";

const Country = new Schema(CountrySchema, {
  collection: "countries",
  timestamps: { currentTime: () => Date.now() },
  strict: true
});

export default model("countries", Country);
