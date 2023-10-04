import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
}

export const lsModeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    
    switchDardMode: (state, action) => {
      state.darkMode = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchDardMode } = lsModeSlice.actions

export default lsModeSlice.reducer