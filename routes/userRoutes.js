const express = require('express');
const { getAllDoctorsController } = require('../controllers/adminCtrl');
const { loginController, registerController,authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController, bookeAppointmnetController, bookingAvaliablityController, userAppointmentsController} = require('../controllers/userCtrl');
const authMiddleware=require("../middlewares/authMiddleware");

//router onject
const router = express.Router()

router.post('/login',loginController);

router.post('/register', registerController);

//Auth|| post
router.post('/getUserData',authMiddleware, authController);

//Apply Doctor || post
router.post('/apply-doctor',authMiddleware, applyDoctorController);
//Notification Doctor || post
router.post('/get-all-notification',authMiddleware, getAllNotificationController);
//Notification Doctor || post
router.post('/delet-all-notification',authMiddleware, deleteAllNotificationController);

//GET ALL DOC
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController);

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post('/booking-availiblity',authMiddleware,bookingAvaliablityController);

//Appointments List
router.get('/user-appointments',authMiddleware,userAppointmentsController);
module.exports = router;