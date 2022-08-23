import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"
import bcrypt from "bcryptjs"

//@desc Auth user & token
// @route POST /api/users/login
//@acess  public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    // console.log(user.name)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isDoctor: user.isDoctor,
      isReport: user.isReport,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid Email and Password")
  }
})

//@desc Register a new user
// @route POST /api/users/
//@acess  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  console.log(name)

  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error("User already exists")
  }

  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 12),
    isDoctor: false,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isDoctor: user.isDoctor,
      isReport: user.isReport,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

//@desc GET user profile
// @route GET /api/users/profile
//@acess  private

const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isDoctor: user.isDoctor,
    })
  } else {
    res.status(404)
    throw new Error("Not found")
  }
})

//@descGET update user profile
// @route PUT /api/users/profile
//@acess  private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isDoctor: updatedUser.isDoctor,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error("Not found")
  }
})
export { authUser, registerUser, updateUserProfile, userProfile }
