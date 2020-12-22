const UserSchema = {
  email: { type: String, required: true, trim: true, toLowerCase: true },
  firstName: { type: String },
  lastName: { type: String },
  hash: { type: String, required: true },
  company: Number,
  team: Number,
  createdAt: Number,
  updatedAt: Number
};

export default UserSchema;
