import { Routes, Route } from 'react-router-dom'
import StorefrontRoutes from './StorefrontRoutes'
import AdminRoutes from './AdminRoutes'

function AppRouter() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<StorefrontRoutes />} />
    </Routes>
  )
}

export default AppRouter