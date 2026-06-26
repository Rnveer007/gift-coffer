import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  ShoppingBag,
  Heart,
  MapPin,
  User,
  MessageCircle,
  Mail,
  LogOut,
  X,
  ChevronRight,
} from 'lucide-react'
import { ROUTE_PATHS } from '../../routes/routePaths'
import { clearCredentials } from '../../features/auth/authSlice'
import { clearCart } from '../../features/cart/cartSlice'
import { clearWishlist } from '../../features/wishlist/wishlistSlice'
import { clearGiftWrapSelection } from '../../features/giftWrap/giftWrapSlice'

function AccountDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const currentUser = useSelector((state) => state.auth.user)

  const handleLogout = () => {
    dispatch(clearCredentials())
    dispatch(clearCart())
    dispatch(clearWishlist())
    dispatch(clearGiftWrapSelection())
    onClose()
    navigate(ROUTE_PATHS.HOME)
  }

  const handleLinkClick = () => {
    onClose()
  }

  const getUserInitial = () => {
    if (!currentUser?.name) return 'G'
    return currentUser.name.charAt(0).toUpperCase()
  }

  const accountMenuItems = [
    {
      label: 'My Orders',
      path: ROUTE_PATHS.MY_ORDERS,
      icon: ShoppingBag,
    },
    {
      label: 'My Custom Requests',
      path: ROUTE_PATHS.MY_CUSTOM_REQUESTS,
      icon: MessageCircle,
    },
    {
      label: 'My Wishlist',
      path: ROUTE_PATHS.WISHLIST,
      icon: Heart,
    },
    {
      label: 'My Addresses',
      path: ROUTE_PATHS.ADDRESSES,
      icon: MapPin,
    },
    {
      label: 'Edit Profile',
      path: ROUTE_PATHS.PROFILE,
      icon: User,
    },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-neutral-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Account menu"
        className="
          fixed bottom-0 left-0 right-0 z-50
          bg-neutral-white
          rounded-t-2xl
          shadow-hover
          max-h-[85vh]
          overflow-y-auto
        "
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-neutral-beige" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close account menu"
          className="
            absolute top-4 right-4
            p-1.5 rounded-full
            text-neutral-text-muted hover:text-neutral-charcoal
            hover:bg-neutral-beige
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-brand-primary
          "
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="px-5 pb-8 pt-2">
          {isAuthenticated && currentUser ? (
            <>
              {/* User identity block */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border-light">
                <div className="
                  w-12 h-12 rounded-full
                  bg-brand-primary
                  flex items-center justify-center
                  flex-shrink-0
                ">
                  <span className="
                    font-heading text-h5 text-white
                    leading-none
                  ">
                    {getUserInitial()}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="
                    font-body text-body-reg font-medium
                    text-neutral-charcoal truncate
                  ">
                    {currentUser.name}
                  </p>
                  <p className="
                    font-body text-small
                    text-neutral-text-muted truncate
                  ">
                    {currentUser.email}
                  </p>
                </div>
              </div>

              {/* Account menu items */}
              <nav aria-label="Account navigation">
                <ul role="list" className="flex flex-col gap-1 mb-5">
                  {accountMenuItems.map((menuItem) => {
                    const IconComponent = menuItem.icon
                    return (
                      <li key={menuItem.path}>
                        <Link
                          to={menuItem.path}
                          onClick={handleLinkClick}
                          className="
                            flex items-center justify-between
                            px-3 py-3.5 rounded-xl
                            text-neutral-charcoal
                            hover:bg-brand-blush hover:text-brand-primary
                            transition-all duration-200
                            group
                            focus:outline-none focus:ring-2 focus:ring-brand-primary
                          "
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent
                              size={18}
                              aria-hidden="true"
                              className="
                                text-neutral-text-muted
                                group-hover:text-brand-primary
                                transition-colors duration-200
                                flex-shrink-0
                              "
                            />
                            <span className="font-body text-body-reg">
                              {menuItem.label}
                            </span>
                          </div>
                          <ChevronRight
                            size={16}
                            aria-hidden="true"
                            className="
                              text-neutral-text-muted
                              group-hover:text-brand-primary
                              transition-colors duration-200
                            "
                          />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* Help & Support */}
              <div className="
                border-t border-border-light
                pt-4 mb-4
              ">
                <p className="
                  font-body text-caption font-semibold
                  text-neutral-text-muted uppercase
                  tracking-widest px-3 mb-2
                ">
                  Help & Support
                </p>
                
                 <a href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="
                    flex items-center justify-between
                    px-3 py-3.5 rounded-xl
                    text-neutral-charcoal
                    hover:bg-brand-blush hover:text-brand-primary
                    transition-all duration-200 group
                    focus:outline-none focus:ring-2 focus:ring-brand-primary
                  "
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle
                      size={18}
                      aria-hidden="true"
                      className="
                        text-neutral-text-muted
                        group-hover:text-brand-primary
                        transition-colors duration-200
                      "
                    />
                    <span className="font-body text-body-reg">
                      Chat on WhatsApp
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    aria-hidden="true"
                    className="
                      text-neutral-text-muted
                      group-hover:text-brand-primary
                      transition-colors duration-200
                    "
                  />
                </a>
                
                <a  href="mailto:hello@giftcoffer.in"
                  onClick={handleLinkClick}
                  className="
                    flex items-center justify-between
                    px-3 py-3.5 rounded-xl
                    text-neutral-charcoal
                    hover:bg-brand-blush hover:text-brand-primary
                    transition-all duration-200 group
                    focus:outline-none focus:ring-2 focus:ring-brand-primary
                  "
                >
                  <div className="flex items-center gap-3">
                    <Mail
                      size={18}
                      aria-hidden="true"
                      className="
                        text-neutral-text-muted
                        group-hover:text-brand-primary
                        transition-colors duration-200
                      "
                    />
                    <span className="font-body text-body-reg">
                      Email Us
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    aria-hidden="true"
                    className="
                      text-neutral-text-muted
                      group-hover:text-brand-primary
                      transition-colors duration-200
                    "
                  />
                </a>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="
                  w-full flex items-center gap-3
                  px-3 py-3.5 rounded-xl
                  text-error-text
                  hover:bg-error-bg
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-error-border
                  font-body text-body-reg
                "
              >
                <LogOut size={18} aria-hidden="true" />
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Guest state */}
              <div className="text-center py-4 mb-6">
                <div className="
                  w-16 h-16 rounded-full
                  bg-brand-blush
                  flex items-center justify-center
                  mx-auto mb-3
                ">
                  <User
                    size={28}
                    aria-hidden="true"
                    className="text-brand-primary"
                  />
                </div>
                <p className="
                  font-heading text-h5
                  text-neutral-charcoal mb-1
                ">
                  Welcome to Gift Coffer
                </p>
                <p className="
                  font-body text-small
                  text-neutral-text-muted
                ">
                  Sign in for orders, wishlist & more
                </p>
              </div>

              {/* Auth buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <Link
                  to={ROUTE_PATHS.LOGIN}
                  onClick={handleLinkClick}
                  className="
                    w-full flex items-center justify-center
                    min-h-[48px] rounded-xl
                    bg-brand-primary hover:bg-brand-primary-hover
                    text-white font-body text-body-reg font-medium
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-brand-primary
                  "
                >
                  Sign In
                </Link>
                <Link
                  to={ROUTE_PATHS.REGISTER}
                  onClick={handleLinkClick}
                  className="
                    w-full flex items-center justify-center
                    min-h-[48px] rounded-xl
                    border border-brand-primary
                    text-brand-primary hover:bg-brand-blush
                    font-body text-body-reg font-medium
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-brand-primary
                  "
                >
                  Create Account
                </Link>
              </div>

              {/* Help & Support — also for guests */}
              <div className="border-t border-border-light pt-4">
                <p className="
                  font-body text-caption font-semibold
                  text-neutral-text-muted uppercase
                  tracking-widest px-3 mb-2
                ">
                  Help & Support
                </p>
                
                <a href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-between
                    px-3 py-3.5 rounded-xl
                    text-neutral-charcoal
                    hover:bg-brand-blush hover:text-brand-primary
                    transition-all duration-200 group
                    focus:outline-none focus:ring-2 focus:ring-brand-primary
                  "
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle
                      size={18}
                      aria-hidden="true"
                      className="
                        text-neutral-text-muted
                        group-hover:text-brand-primary
                        transition-colors duration-200
                      "
                    />
                    <span className="font-body text-body-reg">
                      Chat on WhatsApp
                    </span>
                  </div>
                  <ChevronRight size={16} aria-hidden="true"
                    className="text-neutral-text-muted group-hover:text-brand-primary transition-colors duration-200"
                  />
                </a>
                
                 <a href="mailto:hello@giftcoffer.in"
                  className="
                    flex items-center justify-between
                    px-3 py-3.5 rounded-xl
                    text-neutral-charcoal
                    hover:bg-brand-blush hover:text-brand-primary
                    transition-all duration-200 group
                    focus:outline-none focus:ring-2 focus:ring-brand-primary
                  "
                >
                  <div className="flex items-center gap-3">
                    <Mail
                      size={18}
                      aria-hidden="true"
                      className="
                        text-neutral-text-muted
                        group-hover:text-brand-primary
                        transition-colors duration-200
                      "
                    />
                    <span className="font-body text-body-reg">
                      Email Us
                    </span>
                  </div>
                  <ChevronRight size={16} aria-hidden="true"
                    className="text-neutral-text-muted group-hover:text-brand-primary transition-colors duration-200"
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default AccountDrawer