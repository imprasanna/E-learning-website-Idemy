import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: true,
  courses: false,
  materials: false,
};

export const navStateSlice = createSlice({
  name: "navState",
  initialState,
  reducers: {
    setHomeFalse: (state) => {
      state.home = false;
    },
    setHomeTrue: (state) => {
      state.home = true;
    },
    setCoursesTrue: (state) => {
      state.courses = true;
    },
    setCoursesFalse: (state) => {
      state.courses = false;
    },
    setMaterialsTrue: (state) => {
      state.materials = true;
    },
    setMaterialsFalse: (state) => {
      state.materials = false;
    },
    resetNav: (state) => {
      state.home = true;
      state.courses = false;
      state.materials = false;
    },
  },
});

export const {
  setHomeTrue,
  setHomeFalse,
  setCoursesFalse,
  setCoursesTrue,
  setMaterialsFalse,
  setMaterialsTrue,
  resetNav,
} = navStateSlice.actions;

export default navStateSlice.reducer;
