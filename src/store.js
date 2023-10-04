import { configureStore } from '@reduxjs/toolkit'
import darkMode from './features/ld_mode/mode'
export const store = configureStore({
  reducer: {
    darkMode:darkMode
  },
})