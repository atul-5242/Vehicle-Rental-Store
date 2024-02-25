const mongoose = require("mongoose");

const CourseSchema=new mongoose.Schema({
   courseName:{
    type:String,
   },
   courseDescription:{
    type:String,
   },
   instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true,
   },
   WhatYouWillLearn:{
        type:String,
   },
   courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section",
        }
   ],
   ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
   ],
    price:{
        type:Number,
   },
   thumbnail:{
    type:String,
   },
   tag:{
        type:[String],
        require:true,
   },
   category:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Category",
   },
   studentEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:"User",
        }
   ],
     instructions: {
     type: [String],
     },
   status:{
     type:String,
     enum:["Draft","Published"],
   },
});

module.exports=mongoose.model("Course",CourseSchema);

