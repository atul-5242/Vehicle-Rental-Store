const Section = require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");

exports.courseSectionCreation = async (req,res) =>{
    try {
        // =======================================================HERE MY CODE IS DIFFRENT From Love Bhai.
        // fecth data
        const {sectionName,course_ID}=req.body;
        console.log("Working Fine here.")
        // validate data
        if(!sectionName){
            return res.status(400).json({
                success:false,
                message:"Section name is not present.",
            });
        }
        // insert section name in in db
        const sectionName_insert=await Section.create({sectionName});
        // update refrence of section id in couse 
        // By bhai comment= update course iwth section Object ID:-
        const UpdatedCourse_Deatils = await Course.findByIdAndUpdate(
                                                    {_id:course_ID  },
                                                    {
                                                        $push:{
                                                            courseContent:sectionName_insert._id,
                                                        }
                                                    },
                                                    {
                                                        new:true,
                                                    }
                                            ).populate({
                                                path:"courseContent",
                                                // populate:{
                                                //     path:"subSection"
                                                // }
                                            })
                                            .exec();
                                            console.log("UpdatedDetails.",UpdatedCourse_Deatils)
        // return response.
        return res.status(200).json({
            success:true,
            message:"New section is created Successfully",
            UpdatedCourse_Deatils,
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"New section is not created Successfully",
            error:error.message,
        });
    }
}



exports.UpdateSection = async (req,res) =>{

    try {
        
        // fetching of course id from request ki body or Section id .
        const {sectionName,SectionId}=req.body;
        
        // findOneUpdate happning and update:-
        // validation:-
        if(!sectionName || !SectionId){
            return res.status(400).json({
                success:false,
                message:"sectionName or SectionId name is not present.",
            });
        }
        const Updated_Section=await Section.findByIdAndUpdate(
                                                SectionId,
                                                {
                                                    $set:{
                                                        sectionName:sectionName
                                                    },
                                                },
                                                {new:true,}
        )
        // return response:-
        return res.status(200).json({
            success:true,
            message:"Updated section is created Successfully",
            Updated_Section,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Update section is not happened.",
            error:error.message,
        });
    }
}

exports.deleteSection = async (req,res)=>{
    try {
        // Fetch Id Of section which you want to delete :-
        // assumig that we are sending ID in params:-
        console.log("first")
        const { sectionId,courseId } = req.params;

        console.log(sectionId)
        // Validate ID:-
        if(!sectionId){
            return res.status(400).json({
                success:false,
                message:"Section ID is empty.",
            });
        }
        // delete the Section:-
        const detetedSection=await Section.findByIdAndDelete(
            sectionId
        );
        // TODO[Testing]: do we need to delete the entry from the Course Schema??
        
        if (!detetedSection) {
            return res.status(404).json({
                success: false,
                message: "Section not found.",
            });
        }
        // return The response. 
        return res.status(200).json({
            success: true,
            message: "Section has been successfully deleted.",
            deletedSection: detetedSection,
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"section is not Deleted.",
            error:error.message,
        });
    }   
}   