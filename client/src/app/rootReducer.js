import { combineReducers } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import authReducer from '../features/auth/authSlice'
import giftWrapReducer from '../features/giftWrap/giftWrapSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  auth: authReducer,
  giftWrap: giftWrapReducer,
})

export default rootReducer