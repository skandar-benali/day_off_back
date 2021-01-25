const DepartmentSchema = {
  id: { type: Number, required: true },
  company: { type: Number, required: true },
  name: { type: String, trim: true },
  head: [Number],
  createdAt: { type: Number, index: true },
  updatedAt: Number
};

export default DepartmentSchema;
