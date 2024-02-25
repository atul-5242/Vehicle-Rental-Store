import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataofVehical: {
        Name: "",
        Price: "",
        Type: "",
        Description: "",
        VehicalImageURL: "", // Add this field for the image URL
      },
};

const VehicalCreationSlice = createSlice({
    name:"vehicalCreation",
    initialState: initialState,
    reducers: {
        setVehicalCreation(state, action) {
            const { Name, Price, Type, Description, VehicalImageURL } = action.payload;
            state.dataofVehical = { Name, Price, Type, Description, VehicalImageURL };
          },
    },
});

export const {setVehicalCreation} = VehicalCreationSlice.actions;
export default VehicalCreationSlice.reducer;