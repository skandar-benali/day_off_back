const UserSchema = {
  email: { type: String, required: true, trim: true, toLowerCase: true },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  company: Number,
  role: Number,
  team: Number,
  hash: { type: String, required: true },
  language: { type: String, maxlength: 2, toUpperCase: true, default: "EN" },
  avatar: String,
  createdAt: Number,
  updatedAt: Number
};

export default UserSchema;
