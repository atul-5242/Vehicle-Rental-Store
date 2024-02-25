const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");
const { default: mongoose } = require("mongoose");

// createRating :-
exports.createRating = async (req,res)=>{
    try {
        // find the  userId:-
        const userId= req.user.id;
        // fetch the data rating and review:-
        const {rating , review , CourseId} = req.body;
        
        // check if user is enrolled or not?
        const courseDetails = await Course.findOne(
            {
                _id:CourseId,
                studentEnrolled:{$elemMatch:{$eq:userId}},
            }
        ); 
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"Student is not enrolled in the Course.",
            });
        }
        // check that if student already reviwed the course
        const reviewedOrNOT = await ratingAndreview.findOne(
            {   
                user:userId,
                course:CourseId,
            }
        ); 
        if (!reviewedOrNOT) {
            return res.status(404).json({
                success:false,
                message:"Student is not Rated And Reviewed in the Course.",
            });
        }
        // create the review and rating   
        const ratingReview = await RatingAndReview.create(
            {  
                rating:rating,
                review:review,
                course:CourseId, 
                user:userId,
            }
        )
        // updated course with this rating/review.
        const updatedCourseDetails=await Course.findByIdAndUpdate(
                                                    {_id:CourseId},
                                                    {
                                                        $push:{
                                                            ratingAndReviews:ratingReview._id
                                                        }
                                                    },{
                                                        new:true,
                                                    }
            );
            console.log(updatedCourseDetails)
        // return response
        return res.status(200).json({
            success:false,
            message:"creating Rating And review Successfully.",
            ratingReview,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Invalid Request",
        });
    }
};


// getAverageRating:-
exports.getAverageRating = async (req,res)=>{
    try {
        // get course Id
        const courseId= req.body.courseId;

        // calculate avg rating
        const result= await RatingAndReview.aggregate([
            {
                $match:{
                    course:new mongoose.Types.ObjectId(courseId),
                },
            },
            {
                $group:{
                    _id:null,
                    averageRating:{$avg:"$rating"},
                }
            }
        ])
        // return rating
        if(result.length>0){
             
            return res.status(200).json({
                success:true,
                averageRating:result[0].averageRating,
            })
        }
        // if no rating and review exist :-
        return res.status(200).json({
            success:true,
            message:"No Rating Till yet. Rating is 0",
            averageRating:0,
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Invalid Request",
        });
    }
};


// getAllRating:-
exports.getAllRating = async (req,res)=>{
    try {
        const allReviews= await RatingAndReview.findOne({})
                                .sort({rating:"desc"})
                                .populate({
                                    path:"user",
                                    select:"firstName lastName email image",
                                })
                                .populate({
                                    path:"course",
                                    select:"courseName",
                                })
                                .exec();
        return res.status(200).json({
            success:true,
            message:"All review fetched Successfully.",
            data:allReviews,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Invalid Request",
        });
    }
};