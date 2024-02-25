import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataofVerificationDetails_Slice: {
        aadharCard: "",
        drivingLicence: "",
        photograph: "",
        phoneNumber: "",
      },
};

const VerificationDetails_Slice = createSlice({
    name:"verificationDetails",
    initialState: initialState,
    reducers: {
        setVerificationDetails_Slice(state, action) {
            const { aadharCard, drivingLicence, photograph, phoneNumber } = action.payload;
            state.dataofVehical = { aadharCard, drivingLicence, photograph, phoneNumber };
        },
    },
});

export const {setVerificationDetails_Slice} = VerificationDetails_Slice.actions;
export default VerificationDetails_Slice.reducer;