import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingBag, Search, User, Heart, Menu, X } from 'lucide-react'
import { ROUTE_PATHS } from '../../../routes/routePaths'
import { selectCartItemCount } from '../../../features/cart/cartSelectors'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const cartItemCount = useSelector(selectCartItemCount)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((previousState) => !previousState)
  }

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSearchClick = () => {
    navigate(ROUTE_PATHS.SHOP)
  }

  const navLinks = [
    { label: 'Home', path: ROUTE_PATHS.HOME },
    { label: 'Shop', path: ROUTE_PATHS.SHOP },
    { label: 'Gift Hampers', path: `${ROUTE_PATHS.SHOP}?category=gift-hampers` },
    { label: 'Custom Orders', path: ROUTE_PATHS.CUSTOM_ORDER },
    { label: 'About Us', path: ROUTE_PATHS.ABOUT },
    { label: 'Contact', path: ROUTE_PATHS.CONTACT },
  ]

  return (
    <header
      className="sticky top-0 z-40 w-full bg-neutral-white border-b border-border-light shadow-card"
      role="banner"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex flex-col items-start flex-shrink-0"
            aria-label="Gift Coffer — Go to homepage"
          >
            <span className="font-heading text-h4 text-neutral-charcoal leading-none">
              Gift Coffer
            </span>
            <span className="font-body text-caption text-neutral-text-muted tracking-widest uppercase">
              Thoughtful Gifts
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((navLink) => (
              <Link
                key={navLink.path}
                to={navLink.path}
                className="
                  font-body text-small font-medium
                  text-neutral-text-secondary
                  hover:text-brand-primary
                  transition-colors duration-200
                  relative group
                "
              >
                {navLink.label}
                <span className="
                  absolute -bottom-1 left-0 w-0 h-0.5
                  bg-brand-primary rounded-full
                  group-hover:w-full
                  transition-all duration-300
                " />
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Search */}
            <button
              onClick={handleSearchClick}
              aria-label="Search products"
              className="
                p-2 rounded-md
                text-neutral-text-secondary hover:text-brand-primary
                hover:bg-brand-blush
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary
              "
            >
              <Search size={20} aria-hidden="true" />
            </button>

            {/* Wishlist */}
            <Link
              to={ROUTE_PATHS.WISHLIST}
              aria-label="My wishlist"
              className="
                p-2 rounded-md
                text-neutral-text-secondary hover:text-brand-primary
                hover:bg-brand-blush
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary
              "
            >
              <Heart size={20} aria-hidden="true" />
            </Link>

            {/* Account */}
            <Link
              to={ROUTE_PATHS.PROFILE}
              aria-label="My account"
              className="
                hidden sm:block p-2 rounded-md
                text-neutral-text-secondary hover:text-brand-primary
                hover:bg-brand-blush
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary
              "
            >
              <User size={20} aria-hidden="true" />
            </Link>

            {/* Cart */}
            <Link
              to={ROUTE_PATHS.CART}
              aria-label={`Shopping cart with ${cartItemCount} items`}
              className="
                relative p-2 rounded-md
                text-neutral-text-secondary hover:text-brand-primary
                hover:bg-brand-blush
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary
              "
            >
              <ShoppingBag size={20} aria-hidden="true" />
              {cartItemCount > 0 && (
                <span
                  aria-hidden="true"
                  className="
                    absolute -top-0.5 -right-0.5
                    min-w-[18px] h-[18px]
                    bg-brand-primary text-white
                    text-[10px] font-medium font-body
                    rounded-full
                    flex items-center justify-center px-1
                  "
                >
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              className="
                lg:hidden p-2 rounded-md
                text-neutral-text-secondary hover:text-brand-primary
                hover:bg-brand-blush
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary
              "
            >
              {isMobileMenuOpen
                ? <X size={22} aria-hidden="true" />
                : <Menu size={22} aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="
            lg:hidden
            border-t border-border-light
            bg-neutral-white
            px-4 py-4
            flex flex-col gap-1
          "
        >
          {navLinks.map((navLink) => (
            <Link
              key={navLink.path}
              to={navLink.path}
              onClick={handleMobileMenuClose}
              className="
                font-body text-body-reg font-medium
                text-neutral-text-secondary
                hover:text-brand-primary hover:bg-brand-blush
                px-3 py-3 rounded-md
                transition-all duration-200
                min-h-[44px] flex items-center
              "
            >
              {navLink.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header