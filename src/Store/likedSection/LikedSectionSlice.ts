import { createSlice } from "@reduxjs/toolkit";

export interface LikedSection {
    show: boolean;
}

const initialState: LikedSection = {
    show: false,
};

export const LikedSectionSlice = createSlice({
    name: "LikedSection",
    initialState,
    reducers: {
        toggleLikedSection: (state) => {
            state.show = !state.show;
        },
        setLikedSection: (state, action) => {
            state.show = action.payload;
        },
    },
});

export const { toggleLikedSection, setLikedSection } = LikedSectionSlice.actions;

export default LikedSectionSlice.reducer;