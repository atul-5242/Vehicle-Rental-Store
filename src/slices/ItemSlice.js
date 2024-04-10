import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataofVehical:null,
};

const ItemSlice = createSlice({
    name:"item",
    initialState: initialState,
    reducers: {
        setdataOfVehical(state, value) {
            state.dataofVehical = value.payload;
        },
    },
});

export const {setdataOfVehical} = ItemSlice.actions;
export default ItemSlice.reducer;