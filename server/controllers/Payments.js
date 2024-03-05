// const {instance} = require("../config/razorpay");
// // const Course = require("../models/Course");
// const User = require("../models/User");
// const mailSender = require("../utils/mailSender");
// // const {courseEnrollmentEmail} = require("../mail/templates/courseEnrollmentEmail");
// const { default: mongoose } = require("mongoose");
// // const { paymentSuccessEmail } = require("../mail/templates/paymentSuccessEmail");
// const crypto = require("crypto");

// //initiate the razorpay order
// exports.capturePayment = async(req, res) => {

//     const {courses} = req.body;
//     const userId = req.user.id;

//     if(courses.length === 0) {
//         return res.json({success:false, message:"Please provide Course Id"});
//     }

//     let totalAmount = 0;

//     for(const course_id of courses) {
//         let course;
//         try{
           
//             course = await Course.findById(course_id);
//             if(!course) {
//                 return res.status(200).json({success:false, message:"Could not find the course"});
//             }

//             const uid  = new mongoose.Types.ObjectId(userId);
//             if(course.studentsEnrolled.includes(uid)) {
//                 return res.status(200).json({success:false, message:"Student is already Enrolled"});
//             }

//             totalAmount += course.price;
//         }
//         catch(error) {
//             console.log(error);
//             return res.status(500).json({success:false, message:error.message});
//         }
//     }
//     const currency = "INR";
//     const options = {
//         amount: totalAmount * 100,
//         currency,
//         receipt: Math.random(Date.now()).toString(),
//     }

//     try{
//         const paymentResponse = await instance.orders.create(options);
//         res.json({
//             success:true,
//             message:paymentResponse,
//         })
//     }
//     catch(error) {
//         console.log(error);
//         return res.status(500).json({success:false, mesage:"Could not Initiate Order"});
//     }

// }


// //verify the payment
// exports.verifyPayment = async(req, res) => {
//     const razorpay_order_id = req.body?.razorpay_order_id;
//     const razorpay_payment_id = req.body?.razorpay_payment_id;
//     const razorpay_signature = req.body?.razorpay_signature;
//     const courses = req.body?.courses;
//     const userId = req.user.id;

//     if(!razorpay_order_id ||
//         !razorpay_payment_id ||
//         !razorpay_signature || !courses || !userId) {
//             return res.status(200).json({success:false, message:"Payment Failed"});
//     }

//     let body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_SECRET)
//         .update(body.toString())
//         .digest("hex");

//         if(expectedSignature === razorpay_signature) {
//             //enroll karwao student ko
//             // await enrollStudents(courses, userId, res);
//             //return res
//             return res.status(200).json({success:true, message:"Payment Verified"});
//         }
//         return res.status(200).json({success:"false", message:"Payment Failed"});

// }


// const enrollStudents = async(courses, userId, res) => {

//     if(!courses || !userId) {
//         return res.status(400).json({success:false,message:"Please Provide data for Courses or UserId"});
//     }

//     for(const courseId of courses) {
//         try{
//             //find the course and enroll the student in it
//         const enrolledCourse = await Course.findOneAndUpdate(
//             {_id:courseId},
//             {$push:{studentsEnrolled:userId}},
//             {new:true},
//         )

//         if(!enrolledCourse) {
//             return res.status(500).json({success:false,message:"Course not Found"});
//         }

//         //find the student and add the course to their list of enrolledCOurses
//         const enrolledStudent = await User.findByIdAndUpdate(userId,
//             {$push:{
//                 courses: courseId,
//             }},{new:true})
            
//         ///bachhe ko mail send kardo
//         const emailResponse = await mailSender(
//             enrollStudents.email,
//             `Successfully Enrolled into ${enrolledCourse.courseName}`,
//             courseEnrollmentEmail(enrolledCourse.courseName, `${enrolledStudent.firstName}`)
//         )    
//         //console.log("Email Sent Successfully", emailResponse.response);
//         }
//         catch(error) {
//             console.log(error);
//             return res.status(500).json({success:false, message:error.message});
//         }
//     }

// }

// exports.sendPaymentSuccessEmail = async(req, res) => {
//     const {orderId, paymentId, amount} = req.body;

//     const userId = req.user.id;

//     if(!orderId || !paymentId || !amount || !userId) {
//         return res.status(400).json({success:false, message:"Please provide all the fields"});
//     }

//     try{
//         //student ko dhundo
//         const enrolledStudent = await User.findById(userId);
//         await mailSender(
//             enrolledStudent.email,
//             `Payment Recieved`,
//              paymentSuccessEmail(`${enrolledStudent.firstName}`,
//              amount/100,orderId, paymentId)
//         )
//     }
//     catch(error) {
//         console.log("error in sending mail", error)
//         return res.status(500).json({success:false, message:"Could not send email"})
//     }
// }


// ----------------------------------------------------------------Form here ------------------------
// const {instance} = require("../config/razorpay");
// const crypto = require("crypto");

// //initiate the razorpay order
// exports.capturePayment = async(req, res) => {

//     // const {Product} = req.body;
//     // const userId = req.user.id;

//     // if(Product.length === 0) {
//     //     return res.json({success:false, message:"Please provide Course Id"});
//     // }


//     // for(const course_id of Product) {
//     //     let course;
//     //     try{
           
//     //         course = await Course.findById(course_id);
//     //         if(!course) {
//     //             return res.status(200).json({success:false, message:"Could not find the course"});
//     //         }

//     //         // const uid  = new mongoose.Types.ObjectId(userId);
//     //         // if(course.studentsEnrolled.includes(uid)) {
//     //         //     return res.status(200).json({success:false, message:"Student is already Enrolled"});
//     //         // }

//     //         totalAmount += course.price;
//     //     }
//     //     catch(error) {
//     //         console.log(error);
//     //         return res.status(500).json({success:false, message:error.message});
//     //     }
//     // }
//     let totalAmount=200;
//     const currency = "INR";
//     const options = {
//         amount: totalAmount * 100,
//         currency,
//         receipt: Math.random(Date.now()).toString(),
//     }

//     try{
//         const paymentResponse = await instance.orders.create(options);
//         res.json({
//             success:true,
//             message:paymentResponse,
//         })
//     }
//     catch(error) {
//         console.log(error);
//         return res.status(500).json({success:false, mesage:"Could not Initiate Order"});
//     }

// }


// //verify the payment
// exports.verifyPayment = async(req, res) => {
//     console.log("Hello")
//     console.log("Request Here:.................",res)
//     console.log(".................................")
//     const razorpay_order_id = req.body?.razorpay_order_id;
//     const razorpay_payment_id = req.body?.razorpay_payment_id;
//     const razorpay_signature = req.body?.razorpay_signature;
//     // const courses = req.body?.courses;
//     // const userId = req.user.id;

//     if(!razorpay_order_id ||
//         !razorpay_payment_id ||
//         !razorpay_signature ) {
//             return res.status(404).json({success:false, message:"Payment Failed"});
//     }

//     let body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_SECRET)
//         .update(body.toString())
//         .digest("hex");

//         if(expectedSignature === razorpay_signature) {
//             //enroll karwao student ko
//             // await enrollStudents(courses, userId, res);
//             //return res
//             return res.status(200).json({success:true, message:"Payment Verified"});
//         }
//         return res.status(500).json({success:"false", message:"Payment Failed 1 Sever error"});

// }


// // const enrollStudents = async(courses, userId, res) => {

// //     if(!courses || !userId) {
// //         return res.status(400).json({success:false,message:"Please Provide data for Courses or UserId"});
// //     }

// //     for(const courseId of courses) {
// //         try{
// //             //find the course and enroll the student in it
// //         const enrolledCourse = await Course.findOneAndUpdate(
// //             {_id:courseId},
// //             {$push:{studentsEnrolled:userId}},
// //             {new:true},
// //         )

// //         if(!enrolledCourse) {
// //             return res.status(500).json({success:false,message:"Course not Found"});
// //         }

// //         //find the student and add the course to their list of enrolledCOurses
// //         const enrolledStudent = await User.findByIdAndUpdate(userId,
// //             {$push:{
// //                 courses: courseId,
// //             }},{new:true})
            
// //         ///bachhe ko mail send kardo
// //         const emailResponse = await mailSender(
// //             enrollStudents.email,
// //             `Successfully Enrolled into ${enrolledCourse.courseName}`,
// //             courseEnrollmentEmail(enrolledCourse.courseName, `${enrolledStudent.firstName}`)
// //         )    
// //         //console.log("Email Sent Successfully", emailResponse.response);
// //         }
// //         catch(error) {
// //             console.log(error);
// //             return res.status(500).json({success:false, message:error.message});
// //         }
// //     }

// // }

// // exports.sendPaymentSuccessEmail = async(req, res) => {
// //     const {orderId, paymentId, amount} = req.body;

// //     const userId = req.user.id;

// //     if(!orderId || !paymentId || !amount || !userId) {
// //         return res.status(400).json({success:false, message:"Please provide all the fields"});
// //     }

// //     try{
// //         //student ko dhundo
// //         const enrolledStudent = await User.findById(userId);
// //         await mailSender(
// //             enrolledStudent.email,
// //             `Payment Recieved`,
// //              paymentSuccessEmail(`${enrolledStudent.firstName}`,
// //              amount/100,orderId, paymentId)
// //         )
// //     }
// //     catch(error) {
// //         console.log("error in sending mail", error)
// //         return res.status(500).json({success:false, message:"Could not send email"})
// //     }
// // }


// Till here :---------------------------------------------



const {instance} = require("../config/razorpay");
const Vehical = require("../models/VehicalCreation");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} = require("../mail/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");
const { paymentSuccessEmail } = require("../mail/paymentSuccessEmail");
const crypto = require("crypto");

//initiate the razorpay order
exports.capturePayment = async(req, res) => {

    const {VehicalId} = req.body;
    console.log("Here is the id",req.user)
    const userId = req.user.id;

   

    let totalAmount = 0;
    Vehical_Data = await Vehical.findById(VehicalId);
    if(!Vehical_Data) {
        return res.status(200).json({success:false, message:"Could not find the Vehical Data"});
    }
    totalAmount=Vehical_Data.Price
    
    
    const currency = "INR";
    const options = {
        amount: totalAmount * 100,
        currency,
        receipt: Math.random(Date.now()).toString(),
    }

    try{
        const paymentResponse = await instance.orders.create(options);
        res.json({
            success:true,
            message:paymentResponse,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({success:false, mesage:"Could not Initiate Order"});
    }

}


//verify the payment
exports.verifyPayment = async(req, res) => {
    const razorpay_order_id = req.body?.razorpay_order_id;
    const razorpay_payment_id = req.body?.razorpay_payment_id;
    const razorpay_signature = req.body?.razorpay_signature;
    const VehicalId = req.body?.VehicalId;
    console.log("Hello Everyone",req.body)
    const userId = req.user.id;


    if(!razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature || !userId) {
            return res.status(200).json({success:false, message:"Payment Failed"});
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");

        if(expectedSignature === razorpay_signature) {
            //enroll karwao student ko
            await rentedVehical(VehicalId, userId, res);
            //return res
            return res.status(200).json({success:true, message:"Payment Verified"});
        }
        return res.status(200).json({success:"false", message:"Payment Failed"});

}


const rentedVehical = async(VehicalId, userId, res) => {

    if(!VehicalId || !userId) {
        return res.status(400).json({success:false,message:"Please Provide data for Courses or UserId"});
    }
    try{
        const enrolleVehical = await User.findByIdAndUpdate(userId,
        {$push:{
            RentedVehical: VehicalId,
        }},{new:true})
            
        ///bachhe ko mail send kardo
        // const emailResponse = await mailSender(
        //     enrolleVehical.email,
        //     `Successfully Enrolled into ${enrolledCourse.courseName}`,
        //     courseEnrollmentEmail(enrolledCourse.courseName, `${enrolledStudent.firstName}`)
        // )    
        //console.log("Email Sent Successfully", emailResponse.response);
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({success:false, message:error.message});
        }
    }


exports.sendPaymentSuccessEmail = async(req, res) => {
    const {orderId, paymentId, amount} = req.body;

    const userId = req.user.id;

    if(!orderId || !paymentId || !amount || !userId) {
        return res.status(400).json({success:false, message:"Please provide all the fields"});
    }

    try{
        //student ko dhundo
        const enrolledStudent = await User.findById(userId);
        await mailSender(
            enrolledStudent.email,
            `Payment Recieved`,
             paymentSuccessEmail(`${enrolledStudent.firstName}`,
             amount/100,orderId, paymentId)
        )
    }
    catch(error) {
        console.log("error in sending mail", error)
        return res.status(500).json({success:false, message:"Could not send email"})
    }
}




