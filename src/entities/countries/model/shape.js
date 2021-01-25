const Holidays = {
  name: { type: String, trim: true },
  description: String,
  date: Number,
  dateFrame: {
    day: Number,
    month: { type: Number, min: 1, max: 12 },
    Year: Number
  },
  type: String
};

const CountrySchema = {
  id: { type: Number, required: true, unique: true },
  name: {
    type: String,
    toLowerCase: true,
    unique: true,
    required: true,
    trim: true
  },
  isoName: {
    type: String,
    toLowerCase: true,
    unique: true,
    required: true,
    trim: true
  },
  holidays: { type: [Holidays], default: [] }
};

export default CountrySchema;
