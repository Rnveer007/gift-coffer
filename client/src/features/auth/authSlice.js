import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  role: null,
  accessToken: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, role, accessToken } = action.payload

      state.user = user
      state.role = role
      state.accessToken = accessToken
      state.isAuthenticated = true
    },

    updateUserProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },

    clearCredentials: (state) => {
      state.user = null
      state.role = null
      state.accessToken = null
      state.isAuthenticated = false
    },
  },
})

export const { setCredentials, updateUserProfile, clearCredentials } =
  authSlice.actions

export default authSlice.reducer