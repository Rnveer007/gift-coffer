import { Routes, Route } from 'react-router-dom'
import { ROUTE_PATHS } from './routePaths'
import ProtectedRoute from '../components/common/ProtectedRoute'

function StorefrontRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path={ROUTE_PATHS.HOME} element={<div>Home Page</div>} />
      <Route path={ROUTE_PATHS.SHOP} element={<div>Shop Page</div>} />
      <Route
        path={ROUTE_PATHS.PRODUCT_DETAIL}
        element={<div>Product Detail Page</div>}
      />
      <Route path={ROUTE_PATHS.CART} element={<div>Cart Page</div>} />
      <Route
        path={ROUTE_PATHS.CUSTOM_ORDER}
        element={<div>Custom Order Page</div>}
      />
      <Route path={ROUTE_PATHS.ABOUT} element={<div>About Page</div>} />
      <Route path={ROUTE_PATHS.CONTACT} element={<div>Contact Page</div>} />
      <Route path={ROUTE_PATHS.LOGIN} element={<div>Login Page</div>} />
      <Route path={ROUTE_PATHS.REGISTER} element={<div>Register Page</div>} />
      <Route
        path={ROUTE_PATHS.UNAUTHORIZED}
        element={<div>Unauthorized — You don't have access to this page</div>}
      />

      {/* Protected routes — must be logged in */}
      <Route
        path={ROUTE_PATHS.CHECKOUT}
        element={
          <ProtectedRoute>
            <div>Checkout Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ORDER_CONFIRMATION}
        element={
          <ProtectedRoute>
            <div>Order Confirmation Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.PROFILE}
        element={
          <ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.MY_ORDERS}
        element={
          <ProtectedRoute>
            <div>My Orders Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.MY_CUSTOM_REQUESTS}
        element={
          <ProtectedRoute>
            <div>My Custom Requests Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.WISHLIST}
        element={
          <ProtectedRoute>
            <div>Wishlist Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADDRESSES}
        element={
          <ProtectedRoute>
            <div>Addresses Page</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default StorefrontRoutes