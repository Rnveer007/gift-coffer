import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTE_PATHS } from '../../routes/routePaths'

function ProtectedRoute({ children, requiredRole }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const userRole = useSelector((state) => state.auth.role)

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.LOGIN} replace />
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={ROUTE_PATHS.UNAUTHORIZED} replace />
  }

  return children
}

export default ProtectedRoute