import User from "../models/userModel.js"
import Report from "../models/reportModel.js"
import asyncHandler from "express-async-handler"

const addReport = asyncHandler(async (req, res) => {
  const id = req.params.id
  const {
    name,
    age,
    file,
    sex,
    bloodGroup,
    address,
    allergies,
    surgeries,
    pastMedicalReport,
    medication,
  } = req.body

  const userExist = await User.findOne({ _id: id })

  if (userExist) {
    const user = await Report.create({
      id,
      name,
      file,
      age,
      sex,
      bloodGroup,
      address,
      allergies,
      surgeries,
      pastMedicalReport,
      medication,
    })
    if (user) {
      await User.findByIdAndUpdate({ _id: id }, { isReport: true })
      res.status(201).json({
        id: user.id,
        name: user.name,
        age: user.age,
        file: user.file,
        sex: user.sex,
        bloodGroup: user.bloodGroup,
        address: user.address,
        allergies: user.allergies,
        surgeries: user.surgeries,
        pastMedicalReport: user.pastMedicalReport,
        medication: user.medication,
      })
    }
  }
})
const getReportByPatient = asyncHandler(async (req, res) => {
  const id = req.params.id

  const userExist = await User.findOne({ _id: id })

  if (userExist) {
    const report = await Report.findOne({
      id: id,
    })
    if (report) {
      res.status(201).json({
        _id: report._id,
        id: report.id,
        name: report.name,
        file: report.file,
        age: report.age,
        sex: report.sex,
        bloodGroup: report.bloodGroup,
        address: report.address,
        allergies: report.allergies,
        surgeries: report.surgeries,
        pastMedicalReport: report.pastMedicalReport,
        medication: report.medication,
      })
    }
  }
})
const getReport = asyncHandler(async (req, res) => {
  const id = req.params.id

  // const userExist = await User.findOne({ _id: id })

  // if (userExist) {
  const report = await Report.findOne({
    _id: id,
  })
  if (report) {
    res.status(201).json({
      _id: report._id,
      id: report.id,
      file: report.file,
      name: report.name,
      age: report.age,
      sex: report.sex,
      bloodGroup: report.bloodGroup,
      address: report.address,
      allergies: report.allergies,
      surgeries: report.surgeries,
      pastMedicalReport: report.pastMedicalReport,
      medication: report.medication,
    })
  }
  // }
})
const getAllReport = asyncHandler(async (req, res) => {
  const reports = await Report.find()
  // console.log(reports)

  if (reports) {
    res.status(201).json(reports)
  }
})

const updateReport = asyncHandler(async (req, res) => {
  const id = req.params.id
  const report = await Report.findById(id)

  if (report) {
    report._id = req.params.id || report._id
    report.id = report.id
    report.name = req.body.name || report.name
    report.file = req.body.file || report.file
    report.age = req.body.age || report.age
    report.sex = req.body.sex || report.sex
    report.bloodGroup = req.body.bloodGroup || report.bloodGroup
    report.address = req.body.address || report.address
    report.allergies = req.body.allergies || report.allergies
    report.surgeries = req.body.surgeries || report.surgeries
    report.pastMedicalReport =
      req.body.pastMedicalReport || report.pastMedicalReport
    report.medication = req.body.medication || report.medication

    const updatedReport = await report.save()

    res.json({
      id: updatedReport._id,
      name: updatedReport.name,
      age: updatedReport.age,
      file: updatedReport.file,
      sex: updatedReport.sex,
      bloodGroup: updatedReport.bloodGroup,
      address: updatedReport.address,
      allergies: updatedReport.allergies,
      surgeries: updatedReport.surgeries,
      pastMedicalReport: updatedReport.pastMedicalReport,
      medication: updatedReport.medication,
    })
  } else {
    res.status(404)
    throw new Error("Not found")
  }
})

export { addReport, getReport, getReportByPatient, getAllReport, updateReport }
