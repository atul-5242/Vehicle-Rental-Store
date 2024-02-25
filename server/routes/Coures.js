// Import Required module
const express = require("express");
const router = express.Router();

// Import Controllers:

const {auth,isStudent,isInstructor,isAdmin} = require("../middlewares/auth");// Importing Middlewares
const {createCourse,showAllCousres,getCoursesDetails,getAllCourses} = require("../controllers/Course"); 
const {courseSectionCreation,UpdateSection,deleteSection} = require("../controllers/Section"); 
const {createSubSection} = require("../controllers/SubSection"); 
const {createCategory,showAllCategorys,categoryPageDetails} = require("../controllers/Categorys"); 
const {createRating,getAverageRating,getAllRating} = require("../controllers/RatingAndReview"); 

// *********************************************************************************************************
//                                          Defining router:
// *********************************************************************************************************






// *********************************************************************************************************
//                                          Courses router (for Only Intructor)
// *********************************************************************************************************

// creating Course:
router.post("/createCourse",auth,isInstructor,createCourse);
// ShowAllCourses:
router.get("/getAllCourses",showAllCousres);
// getCoursesDetails:
router.get("/getCourseDetails",getCoursesDetails);
// getAllCourses
router.get("/getFullCourseDetails",getAllCourses);
router.get("/",auth,isInstructor);


// courseCreation
router.post("/addSection",auth,isInstructor,courseSectionCreation);
// UpdateSection
router.post("/updateSection",auth,isInstructor,UpdateSection);
// deleteSection
router.delete("/deleteSection/:sectionId",auth,isInstructor,deleteSection);


// createSubSection
router.post("/addSubSection",auth,isInstructor,createSubSection);


// ********************************************************************************************************
//                                      Category router (Only by Admin)
// ********************************************************************************************************
router.post("/createCategory",auth,isAdmin,createCategory);
router.get("/showAllCategorys",showAllCategorys);
router.post("/getCategoryPageDetails",categoryPageDetails);


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating",auth,isStudent,createRating);
router.get("/getAverageRating",getAverageRating);
router.get("/getAllRating",getAllRating);

module.exports = router;