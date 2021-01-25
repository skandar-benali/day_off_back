const TeamSchema = {
  id: { type: Number, required: true, unique: true },
  name: {
    type: String,
    toLowerCase: true,
    unique: true,
    required: true,
    trim: true
  },
  department: { type: Number },
  head: [Number],
  country: Number
};

export default TeamSchema;
