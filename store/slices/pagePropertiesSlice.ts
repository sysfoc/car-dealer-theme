import { createSlice } from "@reduxjs/toolkit";

const pageProperties = createSlice({
    name: 'pageProperties',
    initialState: {
        pageInteractable : true
    },
    reducers: {
        makePageUnInteractable: (state) => { 
            state.pageInteractable = false;
        },
        makePageInteractable: (state) => { 
            state.pageInteractable = true;
        }
    }
})

export const {makePageInteractable, makePageUnInteractable} = pageProperties.actions;
export default pageProperties.reducer;