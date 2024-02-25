import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dataofItem:null,
};

const ItemSlice = createSlice({
    name:"item",
    initialState: initialState,
    reducers: {
        setdataofItem(state, value) {
            state.dataofItem = value.payload;
        },
    },
});

export const {setdataofItem} = ItemSlice.actions;
export default ItemSlice.reducer;