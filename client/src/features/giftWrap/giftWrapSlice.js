import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedWrap: null,
  occasion: null,
  giftMessage: '',
  messageTo: '',
  messageFrom: '',
}

const giftWrapSlice = createSlice({
  name: 'giftWrap',
  initialState,
  reducers: {
    setSelectedWrap: (state, action) => {
      state.selectedWrap = action.payload
    },

    setOccasion: (state, action) => {
      state.occasion = action.payload
    },

    setGiftMessage: (state, action) => {
      state.giftMessage = action.payload
    },

    setMessageToFrom: (state, action) => {
      const { to, from } = action.payload
      state.messageTo = to
      state.messageFrom = from
    },

    clearGiftWrapSelection: (state) => {
      state.selectedWrap = null
      state.occasion = null
      state.giftMessage = ''
      state.messageTo = ''
      state.messageFrom = ''
    },
  },
})

export const {
  setSelectedWrap,
  setOccasion,
  setGiftMessage,
  setMessageToFrom,
  clearGiftWrapSelection,
} = giftWrapSlice.actions

export default giftWrapSlice.reducer