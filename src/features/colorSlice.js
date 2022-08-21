import { createSlice } from '@reduxjs/toolkit'
import WhiteWatch from '../Assets/white.png'

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    value: WhiteWatch,
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { change } = colorSlice.actions

export default colorSlice.reducer