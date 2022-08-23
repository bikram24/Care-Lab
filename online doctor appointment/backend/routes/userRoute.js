import express from "express"
import {
  authUser,
  updateUserProfile,
  registerUser,
  userProfile,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"
import {
  addReport,
  getAllReport,
  getReport,
  getReportByPatient,
  updateReport,
} from "../controllers/reportController.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", authUser)
router.post("/addReport/:id", addReport)
router.get("/getReport/:id", getReport)
router.get("/getReportByPatient/:id", getReportByPatient)
router.get("/getAllReport", getAllReport)
router.put("/updateReport/:id", updateReport)

export default router
