// import React from 'react'
// import ImageButedCar from '../data/Images/R.jpeg'
// import { useEffect, useState } from "react"
// import { useForm } from "react-hook-form"
// import { toast } from "react-hot-toast"
// import { HiOutlineCurrencyRupee } from "react-icons/hi"
// import { MdNavigateNext } from "react-icons/md"
// import { useDispatch, useSelector } from "react-redux"

// const VehicalCreatePage = () => {


//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm()

//   const dispatch = useDispatch()
//   const { dataofItem } = useSelector((state) => state.item)
//   // const [loading, setLoading] = useState(false)
//   // const [courseCategories, setCourseCategories] = useState([])

//   useEffect(() => {
//     const getCategories = async () => {
//       // setLoading(true)
//       // const categories = await fetchCourseCategories()
//       // if (categories.length > 0) {
//       //   // console.log("categories", categories)
//       //   // setCourseCategories(categories)
//       // }
//       // setLoading(false)
//     }
//     // if form is in edit mode
//     // if (editCourse) {
//     //   // console.log("data populated", editCourse)
//     //   // setValue("courseTitle", course.courseName)
//     //   // setValue("courseShortDesc", course.courseDescription)
//     //   // setValue("coursePrice", course.price)
//     //   // setValue("courseTags", course.tag)
//     //   // setValue("courseBenefits", course.whatYouWillLearn)
//     //   // setValue("courseCategory", course.category)
//     //   // setValue("courseRequirements", course.instructions)
//     //   // setValue("courseImage", course.thumbnail)
//     // }
//     // getCategories()

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const isFormUpdated = () => {
//     const currentValues = getValues()
//     // console.log("changes after editing form values:", currentValues)
//     if (   true
//       // currentValues.courseTitle !== course.courseName ||
//       // currentValues.courseShortDesc !== course.courseDescription ||
//       // currentValues.coursePrice !== course.price ||
//       // currentValues.courseTags.toString() !== course.tag.toString() ||
//       // currentValues.courseBenefits !== course.whatYouWillLearn ||
//       // currentValues.courseCategory._id !== course.category._id ||
//       // currentValues.courseRequirements.toString() !==
//       //   course.instructions.toString() ||
//       // currentValues.courseImage !== course.thumbnail
//     ) {
//       return true
//     }
//     return false
//   }

//   //   handle next button click
//   const onSubmit = async (data) => {
//     // console.log(data)

//   //   if (editCourse) {
//   //     // const currentValues = getValues()
//   //     // console.log("changes after editing form values:", currentValues)
//   //     // console.log("now course:", course)
//   //     // console.log("Has Form Changed:", isFormUpdated())
//   //     if (isFormUpdated()) {
//   //       // const currentValues = getValues()
//   //       // const formData = new FormData()
//   //       // console.log(data)
//   //     //   formData.append("courseId", course._id)
//   //     //   if (currentValues.courseTitle !== course.courseName) {
//   //     //     formData.append("courseName", data.courseTitle)
//   //     //   }
//   //     //   if (currentValues.courseShortDesc !== course.courseDescription) {
//   //     //     formData.append("courseDescription", data.courseShortDesc)
//   //     //   }
//   //     //   if (currentValues.coursePrice !== course.price) {
//   //     //     formData.append("price", data.coursePrice)
//   //     //   }
//   //     //   if (currentValues.courseTags.toString() !== course.tag.toString()) {
//   //     //     formData.append("tag", JSON.stringify(data.courseTags))
//   //     //   }
//   //     //   if (currentValues.courseBenefits !== course.whatYouWillLearn) {
//   //     //     formData.append("whatYouWillLearn", data.courseBenefits)
//   //     //   }
//   //     //   if (currentValues.courseCategory._id !== course.category._id) {
//   //     //     formData.append("category", data.courseCategory)
//   //     //   }
//   //     //   if (
//   //     //     currentValues.courseRequirements.toString() !==
//   //     //     course.instructions.toString()
//   //     //   ) {
//   //     //     formData.append(
//   //     //       "instructions",
//   //     //       JSON.stringify(data.courseRequirements)
//   //     //     )
//   //     //   }
//   //     //   if (currentValues.courseImage !== course.thumbnail) {
//   //     //     formData.append("thumbnailImage", data.courseImage)
//   //     //   }
//   //     //   // console.log("Edit Form data: ", formData)
//   //     //   setLoading(true)
//   //     //   const result = await editCourseDetails(formData, token)
//   //     //   setLoading(false)
//   //     //   if (result) {
//   //     //     dispatch(setStep(2))
//   //     //     dispatch(setCourse(result))
//   //     //   }
//   //     // } else {
//   //     //   toast.error("No changes made to the form")
//   //     // }
//   //     return
//   //   }
//   // }

//     const formData = new FormData()
//     // formData.append("courseName", data.courseTitle)
//     // formData.append("courseDescription", data.courseShortDesc)
//     // formData.append("price", data.coursePrice)
//     // formData.append("tag", JSON.stringify(data.courseTags))
//     // formData.append("whatYouWillLearn", data.courseBenefits)
//     // formData.append("category", data.courseCategory)
//     // formData.append("status", COURSE_STATUS.DRAFT)
//     // formData.append("instructions", JSON.stringify(data.courseRequirements))
//     // formData.append("thumbnailImage", data.courseImage)
//     // setLoading(true)
//     // const result = await addCourseDetails(formData, token)
//     // if (result) {
//     //   // dispatch(setStep(2))
//     //   // dispatch(setCourse(result))
//     // }
//     // setLoading(false)
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
//     >
//       {/* Course Title */}
//       {/* <div className="flex flex-col space-y-2">
//         <label className="text-sm text-richblack-5" htmlFor="courseTitle">
//           Course Title <sup className="text-pink-200">*</sup>
//         </label>
//         <input
//           id="courseTitle"
//           placeholder="Enter Course Title"
//           {...register("courseTitle", { required: true })}
//           className="form-style w-full"
//         />
//         {errors.courseTitle && (
//           <span className="ml-2 text-xs tracking-wide text-pink-200">
//             Course title is required
//           </span>
//         )}
//       </div> */}
//       {/* Course Short Description */}
//       {/* <div className="flex flex-col space-y-2">
//         <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
//           Course Short Description <sup className="text-pink-200">*</sup>
//         </label>
//         <textarea
//           id="courseShortDesc"
//           placeholder="Enter Description"
//           {...register("courseShortDesc", { required: true })}
//           className="form-style resize-x-none min-h-[130px] w-full"
//         />
//         {errors.courseShortDesc && (
//           <span className="ml-2 text-xs tracking-wide text-pink-200">
//             Course Description is required
//           </span>
//         )}
//       </div> */}
//       {/* Course Price */}
//       {/* <div className="flex flex-col space-y-2">
//         <label className="text-sm text-richblack-5" htmlFor="coursePrice">
//           Course Price <sup className="text-pink-200">*</sup>
//         </label>
//         <div className="relative">
//           <input
//             id="coursePrice"
//             placeholder="Enter Course Price"
//             {...register("coursePrice", {
//               required: true,
//               valueAsNumber: true,
//               pattern: {
//                 value: /^(0|[1-9]\d*)(\.\d+)?$/,
//               },
//             })}
//             className="form-style w-full !pl-12"
//           />
//           <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
//         </div>
//         {errors.coursePrice && (
//           <span className="ml-2 text-xs tracking-wide text-pink-200">
//             Course Price is required
//           </span>
//         )}
//       </div> */}
//       {/* Course Category */}
//       {/* <div className="flex flex-col space-y-2">
//         <label className="text-sm text-richblack-5" htmlFor="courseCategory">
//           Course Category <sup className="text-pink-200">*</sup>
//         </label>
//         <select
//           {...register("courseCategory", { required: true })}
//           defaultValue=""
//           id="courseCategory"
//           className="form-style w-full"
//         >
//           <option value="" disabled>
//             Choose a Category
//           </option>
//           {!loading &&
//             courseCategories?.map((category, indx) => (
//               <option key={indx} value={category?._id}>
//                 {category?.name}
//               </option>
//             ))}
//         </select>
//         {errors.courseCategory && (
//           <span className="ml-2 text-xs tracking-wide text-pink-200">
//             Course Category is required
//           </span>
//         )}
//       </div> */}
//       {/* Course Tags */}
//       {/* <ChipInput
//         label="Tags"
//         name="courseTags"
//         placeholder="Enter Tags and press Enter"
//         register={register}
//         errors={errors}
//         setValue={setValue}
//         getValues={getValues}
//       /> */}
//       {/* Course Thumbnail Image */}
//       {/* <Upload
//         name="courseImage"
//         label="Course Thumbnail"
//         register={register}
//         setValue={setValue}
//         errors={errors}
//         // editData={editCourse ? course?.thumbnail : null}
//       /> */}
//       {/* Benefits of the course */}
//       {/* <div className="flex flex-col space-y-2">
//         <label className="text-sm text-richblack-5" htmlFor="courseBenefits">
//           Benefits of the course <sup className="text-pink-200">*</sup>
//         </label>
//         <textarea
//           id="courseBenefits"
//           placeholder="Enter benefits of the course"
//           {...register("courseBenefits", { required: true })}
//           className="form-style resize-x-none min-h-[130px] w-full"
//         />
//         {errors.courseBenefits && (
//           <span className="ml-2 text-xs tracking-wide text-pink-200">
//             Benefits of the course is required
//           </span>
//         )}
//       </div> */}
//       {/* Requirements/Instructions */}
//       {/* <RequirementsField
//         name="courseRequirements"
//         label="Requirements/Instructions"
//         register={register}
//         setValue={setValue}
//         errors={errors}
//         getValues={getValues}
//       /> */}
//       {/* Next Button */}
//       {/* <div className="flex justify-end gap-x-2">
//         {editCourse && (
//           <button
//             onClick={() => dispatch(setStep(2))}
//             disabled={loading}
//             className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
//           >
//             Continue Wihout Saving
//           </button>
//         )}
//         <IconBtn
//           disabled={loading}
//           text={!editCourse ? "Next" : "Save Changes"}
//         >
//           <MdNavigateNext />
//         </IconBtn>
//       </div> */}
//     </form>
//   )
// }
  

// export default VehicalCreatePage
// ------------------------------------------------------------------------------------


// import React from 'react'
// import ImageButedCar from '../data/Images/R.jpeg'
// import { Link } from 'react-router-dom'
// const PurchaseForm = () => {


//     const paymentCall=()=>{

//     }
//   return (
//     <div>

//     <div className='flex justify-center items-center h-screen w-screen  gap-20  '>
//         <div>
//             <div>
//                 <img src={ImageButedCar} alt="Image" className='w-96'/>
//             </div>
//         </div>
//         <div>
//         {/* Form */}
//         <div className='border -translate-y-14 -z-[1] rounded-2xl p-4 shadow-2xl shadow-richblue-400 px-10'>
//                                             {/* Heading */}
//         <div className='text-4xl mb-10'>
//         Please Submit Your Details:
//         </div>
//         <form action="">
//             <div>


//                     <div>
//                         <p className='mb-2 font-semibold text-lg'>
//                             Select your Aadhar Card:
//                         </p>
//                         <div>
//                         <input type="file" className='
//                         file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                        
//                         file:px-3 file:py-1 file:mb-3 file:mt-3 file:ml-3
//                         file:border-none
//                         file:rounded-full
//                         file:text-white
//                         file:cursor-pointer
//                         file:shadow-lg file: shadow-richblack-500/50
//                         bg-gradient-to-br from-gray-600 to-gray-700
//                         text-black/80
//                         rounded-full
//                         cursor-pointer
//                         shadow-xl shadow-gray-700/60
                        
                        
//                         ' />
//                         </div>
//                     </div>
//                     <div>
//                         <p className='mb-2 mt-4 font-semibold text-lg'>
//                             Select your Aadhar Card:
//                         </p>
//                         <div >
//                             <input type="file" className='
//                          file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                        
//                          file:px-3 file:py-1 file:mb-3 file:mt-3 file:ml-3
//                          file:border-none
//                          file:rounded-full
//                          file:text-white
//                          file:cursor-pointer
//                          file:shadow-lg file: shadow-richblack-500/50
//                          bg-gradient-to-br from-gray-600 to-gray-700
//                          text-black/80
//                          rounded-full
//                          cursor-pointer
//                          shadow-xl shadow-gray-700/60
                         
                        
//                         ' />
//                         </div>
//                     </div>
//                     <div>
//                         <p className='mb-2 mt-4 font-semibold text-lg'>
//                             Select your Aadhar Card:
//                         </p>
//                         <div>
//                         <input type="file" className='
//                         file:bg-gradient-to-b file:from-blue-500 file:to-blue-600
                        
//                         file:px-3 file:py-1 file:mb-3 file:mt-3 file:ml-3
//                         file:border-none
//                         file:rounded-full
//                         file:text-white
//                         file:cursor-pointer
//                         file:shadow-lg file: shadow-richblack-500/50
//                         bg-gradient-to-br from-gray-600 to-gray-700
//                         text-black/80
//                         rounded-full
//                         cursor-pointer
//                         shadow-xl shadow-gray-700/60
                        
//                         ' />
//                         </div>
//                     </div>

//                     <div>
//                         <p className='mb-2 mt-4 font-semibold text-lg'>Enter your Contact Number</p>
//                         <input
//                         type="tel"
//                         className='
                                                    
//                             file:bg-white text-center file:px-10 h-10 w-64 file:py-4 file:m-20 file:mb-4 
//                             file:mt-4 file:ml-4 file:border-none file:rounded-full 
//                             file:cursor-pointer file:shadow-lg shadow-richblack-500/50
//                              bg-gradient-to-br from-gray-600 to-gray-700
//                               text-black/80 rounded-full 
//                               cursor-pointer shadow-xl shadow-gray-700/60'
//                             />

//                     </div>

//                     <div>
//                 <Link to={'/MainPaymentPage'}>
                
//                 <button onClick={paymentCall} className="translate-x-14  mb-2 mt-10 p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black  rounded-md">
//                 Submit 
//             </button>
//                 </Link>    
                
           
//                     </div>
//             </div>
                   
//         </form>
       
//         </div>

//         </div>




//     </div>

//     </div>
//   )
// }

// export default PurchaseForm


import React from 'react';
import ImageButedCar from '../data/Images/carlogo.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVehicalCreation } from '../slices/VehicalCreationSlice';
import { createvehical } from '../services/operations/AdminCalls';
import { useForm } from 'react-hook-form';

const VehicalCreatePage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {token} = useSelector( (state) => state.auth );

  
  const onSubmit = (data) => {
    const formData = new FormData()
    console.log("token",token)
    formData.append("Name", data.Name)
    formData.append("Price", data.Price)
    formData.append("Type", data.Type)
    formData.append("Description", data.Description)
    formData.append("VHIMG", data.VehicalImageURL[0])
    // Dispatch the form data to Redux
    console.log("HHHHHHHHHHHHHHHHH",data.VehicalImageURL[0]);
    dispatch(createvehical(formData,token));//api call
    dispatch(setVehicalCreation(formData));
    // Add the rest of your logic here
   
  };

  return (
    <div>
      <div className='flex justify-center items-center h-screen w-screen gap-20'>
        <div>
          <div>
            <img src={ImageButedCar} alt='Image' className='w-96' />
          </div>
        </div>
        <div>
          <div className='border -translate-y-10 -z-[1] rounded-2xl p-4 shadow-2xl shadow-richblue-400 px-10'>
            <div className='text-4xl mb-10'>Please Submit Your Details:</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div>
                  <p className='mb-2 font-semibold text-lg'>Enter Vehical Name:</p>
                  <div>
                    <input
                      type='text'
                      {...register('Name')}
                      className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 ...'
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Enter Vehical Price:</p>
                  <div>
                    <input
                      type='text'
                      {...register('Price')}
                      className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 ...'
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Select Vehical Type:</p>
                  <div>
                    <input
                      type='text'
                      {...register('Type')}
                      className='file:bg-white text-center file:px-10 h-10 w-64 file:py-4 file:m-20 file:mb-4 file:mt-4 file:ml-4 file:border-none file:rounded-full file:cursor-pointer file:shadow-lg shadow-richblack-500/50 bg-gradient-to-br from-gray-600 to-gray-700 text-black/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60'
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Enter Vehical Description:</p>
                  <div>
                    <textarea
                      {...register('Description')}
                      style={{ width: '400px', height: '80px' }}
                    />
                  </div>
                </div>
                <div>
                  <p className='mb-2 mt-4 font-semibold text-lg'>Select Vehical Image:</p>
                  <div>
  <p className='mb-2 mt-4 font-semibold text-lg'>Select Vehical Image:</p>
  <div>
    <input
      type='file'
      name='VehicalImageURL'
      {...register('VehicalImageURL')}
      className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 ...'
    />
  </div>
</div>

                </div>
                <div>
                    <button
                      type='submit'
                      className='translate-x-14 mb-2 mt-10 p-5 px-10 shadow-2xl hover:scale-95 shadow-black bg-black font-semibold text-white hover:bg-richblack-5 duration-400 transition-all hover:text-black rounded-md'
                    >
                      Submit
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicalCreatePage;
