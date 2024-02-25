const SubSection=require("../models/SubSection");
const Section=require("../models/Section");
const cloudinary = require("cloudinary").v2;
const { uploadVideoToCloudinary } = require("../utils/imageUploader");

// create SubSection:-

exports.createSubSection = async (req,res)=>{
    try {
                // fetch data from req ki body and also course id ki id also.
            const {title,timeDuration,description,sectionID}=req.body;
            // fetch also video :-
            const video_file=req.files.video_lec;
            // validate
            if (!title || !timeDuration || !description || !sectionID || !video_file) {
                return res.status(400).json({
                    success:false,
                    message:"All SubSection Field require.",
                });
            }
            console.log("Details:",video_file)
            const uploaded_video=await uploadVideoToCloudinary(video_file,process.env.FOLDER_NAME);
            console.log("Upload:",uploaded_video)
            if (!uploaded_video) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to upload video to Cloudinary.",
                });
            }
            console.log("Here I am.")
            // find the course and insert into or make th entry in the DB:-
            const subSectionDetails=await SubSection.create(
                    {title:title,timeDuration:timeDuration,description:description,videoUrl:uploaded_video.secure_url}
                )

                
            // if no course founded then return no course found response.
            if (!subSectionDetails) {
                return res.status(404).json({
                    success: false,
                    message: "Section not found for updating SubSection.",
                });
            }

            // Upadte Section with SubSection:-
            const UpadtedSection=await Section.findByIdAndUpdate(
                {_id:sectionID},
                {$push:{subSection:subSectionDetails._id,}},{new:true}
            )
            // return response. 
                // return The response. 

                return res.status(200).json({
                    success: true,
                    message: "subSection has been created successfully.",
                    subSectionDetails:subSectionDetails,
                });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "subSection has not been created.",
        });
    }
}