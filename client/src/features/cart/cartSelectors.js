export const selectCartItems = (state) => state.cart.cartItems

export const selectCartItemCount = (state) =>
  state.cart.cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0)

export const selectCartSubtotal = (state) =>
  state.cart.cartItems.reduce(
    (totalAmount, item) => totalAmount + item.price * item.quantity,
    0
  )