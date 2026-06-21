import { Routes, Route } from 'react-router-dom'
import { ROUTE_PATHS } from './routePaths'
import ProtectedRoute from '../components/common/ProtectedRoute'

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path={ROUTE_PATHS.ADMIN_DASHBOARD}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Dashboard Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_PRODUCTS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Products Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_PRODUCT_EDIT}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Product Edit Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_BULK_UPLOAD}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Bulk Upload Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_ORDERS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Orders Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_CUSTOM_ORDERS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Custom Orders Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_GIFT_WRAPS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Gift Wraps Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_CATEGORIES}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Categories Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_FLASH_SALES}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Flash Sales Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_COUPONS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Coupons Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_CUSTOMERS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Customers Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_REVIEWS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Reviews Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_QANDA}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Q&A Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_HOMEPAGE_CMS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Homepage CMS Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_MARKETING}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Marketing Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.ADMIN_SETTINGS}
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Settings Page</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AdminRoutes