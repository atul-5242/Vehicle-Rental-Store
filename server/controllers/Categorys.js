const Categorys=require("../models/Categorys");
// const Courses = require("../models/Course");
// create Category ka handler function or API route:-
exports.createCategory = async (req,res) =>{
    try {
        // fetch data:-
        const {name,description}=req.body;
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required.Little Change for git.",
            });
        }
        // create entry in DB:-
        const CategoryDetails = await Categorys.create({
            name:name,
            description:description,
        });
        console.log(CategoryDetails);
        // return response:
        return res.status(200).json({
            success:true,
            message:"Category Created Successfully."
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message,
            
        });
    }
}


exports.showAllCategorys = async (req,res)=>{
    try {
        // agar kisi criteria ke basis pe find nhi karan chate to koi bhi chiz {} clurly brace ke andar kuch
        // pass kene ki need nhi hai.

        const allCategorys = await Categorys.find({},{name:true,description:true});//par jo bhi data aaye usme name 
        // and description present hona must hai.
        res.status(200).json({
            success:true,
            message:"All Categorys returned Successfully.",
            Category: allCategorys,
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message,
            
        });
    }
}


// ======================================HW THIS IS LOVE BHAI CODE WRITE IT BY YOURSELF:=============

exports.categoryPageDetails = async (req, res) => {
	try {
		// get categoryId
		const categoryId = req.body.categoryId;
		// get courses for specified caytegoryId
		const selectedCateory = await Categorys.findById({_id:categoryId})
												.populate({
													path:"course",
												}).exec();
		// validation
		if(!selectedCateory){
			return res.status(404).json({
				success:false,
				message:'Data Not Found',
				
			});
		}
		// get Courses for different Categories
		const differentCategories = await Categorys.find(
			{
				_id:{$ne:categoryId},//here $ne means not equal.
			}
		).populate("course").exec(); 
		// get Top Selling Courses
		// Above last is HW
		// return response
		return res.status(200).json({
            success:true,
			data:{
				selectedCateory,
				differentCategories,
			},
            message:"All Data are fetched of the Category Pages.",
            
        });

	} catch (error) {
		return res.status(500).json({
            success:false,
            message:error.message,
        });
	}
};