import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react'
import { ROUTE_PATHS } from '../../../routes/routePaths'
import { selectCartItemCount } from '../../../features/cart/cartSelectors'

function MobileBottomNav() {
  const location = useLocation()
  const cartItemCount = useSelector(selectCartItemCount)

  const isActiveRoute = (path) => location.pathname === path

  const navItems = [
    {
      label: 'Home',
      path: ROUTE_PATHS.HOME,
      icon: Home,
    },
    {
      label: 'Search',
      path: ROUTE_PATHS.SHOP,
      icon: Search,
    },
    {
      label: 'Wishlist',
      path: ROUTE_PATHS.WISHLIST,
      icon: Heart,
    },
    {
      label: 'Profile',
      path: ROUTE_PATHS.PROFILE,
      icon: User,
    },
    {
      label: 'Cart',
      path: ROUTE_PATHS.CART,
      icon: ShoppingBag,
      badge: cartItemCount,
    },
  ]

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="
        lg:hidden
        fixed bottom-0 left-0 right-0 z-40
        bg-neutral-white
        border-t border-border-light
        shadow-hover
        safe-area-pb
      "
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((navItem) => {
          const IconComponent = navItem.icon
          const isActive = isActiveRoute(navItem.path)

          return (
            <Link
              key={navItem.path}
              to={navItem.path}
              aria-label={
                navItem.badge > 0
                  ? `${navItem.label} — ${navItem.badge} items`
                  : navItem.label
              }
              aria-current={isActive ? 'page' : undefined}
              className="
                relative flex flex-col items-center justify-center
                gap-0.5 min-w-[44px] min-h-[52px]
                rounded-md
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary
              "
            >
              <span className="relative">
                <IconComponent
                  size={22}
                  aria-hidden="true"
                  className={`
                    transition-colors duration-200
                    ${isActive
                      ? 'text-brand-primary'
                      : 'text-neutral-text-muted'
                    }
                  `}
                  strokeWidth={isActive ? 2.5 : 1.5}
                />

                {/* Badge */}
                {navItem.badge > 0 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute -top-1.5 -right-2
                      min-w-[16px] h-[16px]
                      bg-brand-primary text-white
                      text-[9px] font-medium font-body
                      rounded-full
                      flex items-center justify-center px-1
                    "
                  >
                    {navItem.badge > 99 ? '99+' : navItem.badge}
                  </span>
                )}
              </span>

              <span
                className={`
                  font-body text-[10px] font-medium
                  transition-colors duration-200
                  ${isActive
                    ? 'text-brand-primary'
                    : 'text-neutral-text-muted'
                  }
                `}
              >
                {navItem.label}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="
                    absolute top-1 
                    w-1 h-1 rounded-full 
                    bg-brand-primary
                  "
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav