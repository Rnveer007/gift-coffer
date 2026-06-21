import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlistedProductIds: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      const productId = action.payload

      const isAlreadyWishlisted = state.wishlistedProductIds.includes(productId)

      if (!isAlreadyWishlisted) {
        state.wishlistedProductIds.push(productId)
      }
    },

    removeProductFromWishlist: (state, action) => {
      const productId = action.payload

      state.wishlistedProductIds = state.wishlistedProductIds.filter(
        (id) => id !== productId
      )
    },

    toggleWishlistProduct: (state, action) => {
      const productId = action.payload

      const isAlreadyWishlisted = state.wishlistedProductIds.includes(productId)

      if (isAlreadyWishlisted) {
        state.wishlistedProductIds = state.wishlistedProductIds.filter(
          (id) => id !== productId
        )
      } else {
        state.wishlistedProductIds.push(productId)
      }
    },

    clearWishlist: (state) => {
      state.wishlistedProductIds = []
    },
  },
})

export const {
  addProductToWishlist,
  removeProductFromWishlist,
  toggleWishlistProduct,
  clearWishlist,
} = wishlistSlice.actions

export default wishlistSlice.reducer