import { Schema, model } from "mongoose";
import CompanySchema from "./shape";

const Company = new Schema(CompanySchema, {
  collection: "companies",
  timestamps: { currentTime: () => Date.now() },
  strict: true
});

export default model("companies", Company);
