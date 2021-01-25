const CountShape = {
  id: {
    type: String,
    unique: true,
    default: "COUNTER_ID"
  },
  user: { type: Number, default: 0 },
  company: { type: Number, default: 0 },
  team: { type: Number, default: 0 },
  country: { type: Number, default: 0 }
};

export default CountShape;
