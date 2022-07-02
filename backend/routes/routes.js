const express = require("express");
const router = express.Router();

// Import Controllers
const SignupController = require("../controllers/SignupController");
const LoginController = require("../controllers/LoginController");
const CategoriesController = require("../controllers/CategoriesController");
const BookingController = require("../controllers/BookingController");
const PaymentController = require("../controllers/PaymentController");
const FeedbackController = require("../controllers/FeedbackController");
const CreatePackageController = require("../controllers/CreatePackageController");
const ShowRidesController = require("../controllers/ShowRidesController");
const ShowFeedbackController = require("../controllers/ShowFeedbackController");
const GetcategoryController = require("../controllers/GetCategory");
const GetPackageController = require("../controllers/GetPackageController");
const GetUsers = require("../controllers/GetUsers");
const DeleteUser = require("../controllers/DeleteUser");
const DeleteBooking = require("../controllers/DeleteBooking");
const DeleteFeedback = require("../controllers/DeleteFeedback");
const DeleteCategory = require("../controllers/DeleteCategory");
const DeletePackage = require("../controllers/DeletePackage");
const UpdateCategory = require("../controllers/UpdateCategory");


// POST Routes
router.post("/createuser", SignupController);
router.post("/userlogin", LoginController);
router.post("/createcategory", CategoriesController);
router.post("/createpackage", CreatePackageController);
router.post("/confirmbooking", BookingController);
router.post("/payment", PaymentController);
router.post("/sendfeedback", FeedbackController);


// GET Routes
router.get("/getbookingdata", ShowRidesController);
router.get("/getfeedback", ShowFeedbackController);
router.get("/getcreatecategory", GetcategoryController);
router.get("/getpackage", GetPackageController);
router.get("/getusers", GetUsers);


// DELETE Routes
router.delete("/deleteuser/:id", DeleteUser);
router.delete("/deletebookingdata/:id", DeleteBooking);
router.delete("/deletefeedback/:id", DeleteFeedback);
router.delete("/deletecategory/:id", DeleteCategory);
router.delete("/deletepackage/:id", DeletePackage);


// UPDATE Routes
router.put("/updatecategory/:id", UpdateCategory);


module.exports = router;
