import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import { Brand, Customer, UserType } from '../type'

interface State {
  userType: UserType | string
  customer: Customer | null
  brand: Brand | null
}

const initialState: State = {
  userType: '',
  brand: null,
  customer: null,
}
const token = localStorage.getItem('token')
if (token) {
  const decodedToken = jwt_decode<JwtPayload>(token)
  const expiresAt = new Date(decodedToken.exp * 1000)
  if (new Date() > expiresAt) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  } else {
    const userData = JSON.parse(localStorage.getItem('user'))
    initialState.userType = userData.userType
    initialState.brand = userData.brand
    initialState.customer = userData.customer
  }
} else console.log('no token found')

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserType: (state, { payload }: PayloadAction<UserType>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userType = payload
    },
    setUserBrand: (state, { payload }: PayloadAction<Brand>) => {
      state.brand = payload
    },
    setUserCustomer: (state, { payload }: PayloadAction<Customer>) => {
      state.customer = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserType, setUserBrand, setUserCustomer } = userSlice.actions

export default userSlice.reducer
