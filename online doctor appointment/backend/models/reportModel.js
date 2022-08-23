import mongoose from "mongoose"

const reportSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    file: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    allergies: {
      type: String,
    },
    surgeries: {
      type: String,
    },
    pastMedicalReport: {
      type: String,
    },
    medication: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Report = mongoose.model("Report", reportSchema)

export default Report
