const CompanySchema = {
  id: { type: Number, required: true },
  name: { type: String, trim: true },
  creator: { type: Number},
  paymentDate: { type: Number },
  expirationDate: { type: Number },
  createdAt: Number,
  updatedAt: Number
};

export default CompanySchema;
