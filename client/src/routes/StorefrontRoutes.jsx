import { Routes, Route } from 'react-router-dom'
import { ROUTE_PATHS } from './routePaths'
import ProtectedRoute from '../components/common/ProtectedRoute'
import StorefrontLayout from '../components/layout/storefront/StorefrontLayout'
import FloatingWhatsApp from '../components/common/FloatingWhatsApp'

function StorefrontRoutes() {
  return (
    <>
      <FloatingWhatsApp phoneNumber="919999999999" />

      <StorefrontLayout>
        <Routes>
          {/* Public routes */}
          <Route path={ROUTE_PATHS.HOME} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Home Page</div>} />
          <Route path={ROUTE_PATHS.SHOP} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Shop Page</div>} />
          <Route path={ROUTE_PATHS.PRODUCT_DETAIL} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Product Detail Page</div>} />
          <Route path={ROUTE_PATHS.CART} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Cart Page</div>} />
          <Route path={ROUTE_PATHS.CUSTOM_ORDER} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Custom Order Page</div>} />
          <Route path={ROUTE_PATHS.ABOUT} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">About Page</div>} />
          <Route path={ROUTE_PATHS.CONTACT} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Contact Page</div>} />
          <Route path={ROUTE_PATHS.LOGIN} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Login Page</div>} />
          <Route path={ROUTE_PATHS.REGISTER} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Register Page</div>} />
          <Route path={ROUTE_PATHS.UNAUTHORIZED} element={<div className="p-8 font-heading text-h3 text-neutral-charcoal">Unauthorized</div>} />

          {/* Protected routes */}
          <Route path={ROUTE_PATHS.CHECKOUT} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charcoal">Checkout Page</div></ProtectedRoute>} />
          <Route path={ROUTE_PATHS.ORDER_CONFIRMATION} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charcoal">Order Confirmation</div></ProtectedRoute>} />
          <Route path={ROUTE_PATHS.PROFILE} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charcoal">Profile Page</div></ProtectedRoute>} />
          <Route path={ROUTE_PATHS.MY_ORDERS} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charcoal">My Orders</div></ProtectedRoute>} />
          <Route path={ROUTE_PATHS.MY_CUSTOM_REQUESTS} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charfoal">My Custom Requests</div></ProtectedRoute>} />
          <Route path={ROUTE_PATHS.WISHLIST} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charcoal">Wishlist</div></ProtectedRoute>} />
          <Route path={ROUTE_PATHS.ADDRESSES} element={<ProtectedRoute><div className="p-8 font-heading text-h3 text-neutral-charcoal">Addresses</div></ProtectedRoute>} />
        </Routes>
      </StorefrontLayout>
    </>
  )
}

export default StorefrontRoutes