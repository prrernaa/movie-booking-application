const express = require('express');
const userRouter = express.Router();

const { getAllUser, signUp, updateUser, deleteUser, logIn, getBookingofUser, getUserById } = require('../Controllers/userController');

userRouter.get("/", getAllUser);
userRouter.post("/signup", signUp)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)
userRouter.post("/login", logIn)
userRouter.get("/bookings/:id", getBookingofUser);
userRouter.get("/:id", getUserById);

module.exports = userRouter;