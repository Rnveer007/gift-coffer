import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home, ShoppingBag, Gift, Sparkles, User } from 'lucide-react'
import { ROUTE_PATHS } from '../../../routes/routePaths'
import { selectCartItemCount } from '../../../features/cart/cartSelectors'
import AccountDrawer from '../../common/AccountDrawer'

function MobileBottomNav() {
  const location = useLocation()
  const cartItemCount = useSelector(selectCartItemCount)
  const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState(false)

  const isActiveRoute = (path) => location.pathname === path

  const handleAccountOpen = () => setIsAccountDrawerOpen(true)
  const handleAccountClose = () => setIsAccountDrawerOpen(false)

  const navItems = [
    {
      label: 'Home',
      path: ROUTE_PATHS.HOME,
      icon: Home,
      type: 'link',
    },
    {
      label: 'Shop',
      path: ROUTE_PATHS.SHOP,
      icon: ShoppingBag,
      type: 'link',
    },
    {
      label: 'Hampers',
      path: ROUTE_PATHS.SHOP + '?category=gift-hampers',
      icon: Gift,
      type: 'link',
    },
    {
      label: 'Custom',
      path: ROUTE_PATHS.CUSTOM_ORDER,
      icon: Sparkles,
      type: 'link',
    },
    {
      label: 'Account',
      icon: User,
      type: 'button',
      onPress: handleAccountOpen,
    },
  ]

  return (
    <>
      <nav
        aria-label="Mobile bottom navigation"
        className="
          lg:hidden
          fixed bottom-0 left-0 right-0 z-40
          bg-neutral-white
          border-t border-border-light
          shadow-hover
        "
      >
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((navItem) => {
            const IconComponent = navItem.icon
            const isActive = navItem.type === 'link'
              ? isActiveRoute(navItem.path)
              : isAccountDrawerOpen

            if (navItem.type === 'button') {
              return (
                <button
                  key={navItem.label}
                  onClick={navItem.onPress}
                  aria-label={navItem.label}
                  aria-expanded={isAccountDrawerOpen}
                  className="
                    relative flex flex-col items-center
                    justify-center gap-0.5
                    min-w-[52px] min-h-[52px]
                    rounded-md transition-all duration-200
                    focus:outline-none focus:ring-2
                    focus:ring-brand-primary
                  "
                >
                  <IconComponent
                    size={22}
                    aria-hidden="true"
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`
                      transition-colors duration-200
                      ${isActive
                        ? 'text-brand-primary'
                        : 'text-neutral-text-muted'
                      }
                    `}
                  />
                  <span className={`
                    font-body text-[10px] font-medium
                    transition-colors duration-200
                    ${isActive
                      ? 'text-brand-primary'
                      : 'text-neutral-text-muted'
                    }
                  `}>
                    {navItem.label}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute top-0.5
                        w-1 h-1 rounded-full
                        bg-brand-primary
                      "
                    />
                  )}
                </button>
              )
            }

            return (
              <Link
                key={navItem.label}
                to={navItem.path}
                aria-label={navItem.label}
                aria-current={isActive ? 'page' : undefined}
                className="
                  relative flex flex-col items-center
                  justify-center gap-0.5
                  min-w-[52px] min-h-[52px]
                  rounded-md transition-all duration-200
                  focus:outline-none focus:ring-2
                  focus:ring-brand-primary
                "
              >
                <span className="relative">
                  <IconComponent
                    size={22}
                    aria-hidden="true"
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`
                      transition-colors duration-200
                      ${isActive
                        ? 'text-brand-primary'
                        : 'text-neutral-text-muted'
                      }
                    `}
                  />
                  {navItem.label === 'Shop' && cartItemCount > 0 && (
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
                      {cartItemCount > 99 ? '99+' : cartItemCount}
                    </span>
                  )}
                </span>
                <span className={`
                  font-body text-[10px] font-medium
                  transition-colors duration-200
                  ${isActive
                    ? 'text-brand-primary'
                    : 'text-neutral-text-muted'
                  }
                `}>
                  {navItem.label}
                </span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute top-0.5
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

      <AccountDrawer
        isOpen={isAccountDrawerOpen}
        onClose={handleAccountClose}
      />
    </>
  )
}

export default MobileBottomNav