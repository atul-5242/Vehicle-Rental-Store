const Course = require("../models/Course");
const Tag = require("../models/Categorys");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const { default: mongoose } = require("mongoose");

// create course ka handler function:-
exports.createCourse = async (req,res)=>{
    try {
        // fetch data:-
        const {courseName,courseDescription,whatYouWillLearn,price,tag_id}=req.body;
        // console.log("Tag:", new mongoose.Types.ObjectId(String(tag)))
        //get thumbnail.
        const thumbnail=req.files.thumbnailImage;
        // validation:-
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag_id){
            return res.status(400).json({
                success:false,
                message:"All Fields are required.",
            });
        }
        
        // check for istructor:-
        const userId=req.user.id;
        const instructorDetails = await User.findById(userId);
        // console.log("Instructor Details",instructorDetails);
        
        if(!instructorDetails){
            return res.status(404).json({
                success:false,
                message:"Instructor not found.",
            });
        }
        // check given tag is vaild or not:-
        if (!mongoose.Types.ObjectId.isValid(tag_id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid tag ID.",
            });
        }
        const tagDetails=await Tag.findById(tag_id);
        if(!tagDetails){

            return res.status(404).json({
                success:false,
                message:"Instructor not found.",
            });
        }
        // upload image to cloudinary:-
        const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);

        // create an entry for new Course:-
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor:instructorDetails._id,
            whatYouWillLearn:whatYouWillLearn,
            price,
            tag:tagDetails._id,
            thumbnail:thumbnailImage.secure_url,
        });

        // add the new Course to the user Schema of Instructor:-
        await User.findByIdAndUpdate(
            {_id:instructorDetails._id},
            {
                $push:{
                    courses:newCourse._id,
                }
            },
            {new:true},
        );
        // update the Tag ka Schema 
        // ToDo: Hw

        // return respnse:-
        return res.status(200).json({
            success:true,
            message:"Course Created Successfully.",
            data:newCourse,
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:`Failed to Course Creation.${error.message}`
        });
    }
}

// get ALl Courses ka handler function lekhna hai:-

exports.showAllCousres = async (req,res)=>{
    try {
        const allCourses = await Course.find({},{
                                                courseName:true,
                                                price:true,
                                                thumbnail:true,
                                                instructor:true,
                                                ratingAndReviews:true,
                                                studentEnrolled:true,})
                                                .populate("instructor")
                                                .exec();
        return res.status(200).json({
            success:true,
            message:"Date for all Course fetched Successfully.",
            data:allCourses, 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:`Can not fetch course Data.${error.message}`,
        });
    }
}


// getCoursesDetails:-
// COMPLETE IT:====================*****************************=====================================
exports.getCoursesDetails=async (req,res)=>{
    try {
        // get id from req ki body:-
        const {courseID} = req.body;
        // find course ki details:-
        console.log(courseID)
        const courseDetails=await Course.find(
                                            {_id:courseID})
                                            .populate(
                                                {
                                                    path:"instructor",
                                                    // populate:{
                                                    //     path:"User",
                                                    //     // populate:{
                                                    //     //     path:"additionalDetails",
                                                    //     //     populate:{
                                                    //     //         path:"Profile",
                                                    //     //     }
                                                    //     // }
                                                    // },
                                                }
                                            )
                                            // .populate("category")
                                            // .populate("RatingAndReview")
                                            .populate({
                                                path: "courseContent",

                                                populate: {
                                                    path: "subSection",
                                                  }
                                           }).exec();

            // validation:-
            console.log(courseDetails)
            if (!courseDetails) {
                return res.status(400).json({
                    success:false,
                    message:`Could not find the course with course ID:${courseID}`
                })
            }
            return res.status(200).json({
                success:true,
                message:`The course found Successfull with course ID:${courseID}`,
                data:courseDetails,
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:`Internal Server error Could not find the course.`
        })
    }
}


// BY LOVE BABBAR:----------getCoursesDetails:-
exports.getAllCourses = async (req, res) => {
	try {
		const allCourses = await Course.find(
			{},
			{
				courseName: true,
				price: true,
				thumbnail: true,
				instructor: true,
				ratingAndReviews: true,
				studentsEnroled: true,
			}
		)
			.populate("instructor")
			.exec();
		return res.status(200).json({
			success: true,
			data: allCourses,
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json({
			success: false,
			message: `Can't Fetch Course Data`,
			
		});
	}
};


