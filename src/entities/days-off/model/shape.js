const singleDayOff = {
  day: { type: Number, min: 1, max: 31 },
  month: { type: Number, min: 1, max: 12 },
  year: { type: Number }
};

const dayOffSchema = {
  user: { type: Number, required: true },
  beginDate: { type: Number },
  days: [singleDayOff],
  type: { type: String, default: "", enum }
  createdAt: Number,
  updatedAt: Number
};

export default dayOffSchema;
