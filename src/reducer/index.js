import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import profileReducer from "../slices/profileSlice";
import itemReducer from "../slices/ItemSlice";
import vehicalCreationReducer from '../slices/VehicalCreationSlice'
import verificationDetailsReducer from '../slices/VerificationDetails_Slice'
const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    item:itemReducer,
    vehicalCreation:vehicalCreationReducer,
    verificationDetails:verificationDetailsReducer,
})

export default rootReducer;