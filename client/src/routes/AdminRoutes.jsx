import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/common/ProtectedRoute'

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Dashboard Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="products"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Products Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="products/:productId/edit"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Product Edit Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="products/bulk-upload"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Bulk Upload Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="orders"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Orders Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="custom-orders"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Custom Orders Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="gift-wraps"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Gift Wraps Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="categories"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Categories Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="flash-sales"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Flash Sales Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="coupons"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Coupons Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="customers"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Customers Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="reviews"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Reviews Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="qanda"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Q&A Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="homepage-cms"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Homepage CMS Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="marketing"
        element={
          <ProtectedRoute requiredRole="admin">
            <div>Admin Marketing Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="settings"
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