import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userType: '',
  },
  reducers: {
    setUserType: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userType = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserType } = userSlice.actions

export default userSlice.reducer