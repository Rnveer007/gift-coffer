import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const incomingItem = action.payload

      const existingItem = state.cartItems.find(
        (item) =>
          item.productId === incomingItem.productId &&
          item.variantId === incomingItem.variantId
      )

      if (existingItem) {
        existingItem.quantity += incomingItem.quantity
      } else {
        state.cartItems.push(incomingItem)
      }
    },

    removeItemFromCart: (state, action) => {
      const { productId, variantId } = action.payload

      state.cartItems = state.cartItems.filter(
        (item) =>
          !(item.productId === productId && item.variantId === variantId)
      )
    },

    updateItemQuantity: (state, action) => {
      const { productId, variantId, quantity } = action.payload

      const itemToUpdate = state.cartItems.find(
        (item) =>
          item.productId === productId && item.variantId === variantId
      )

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    },

    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer