import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../../../routes/routePaths'

function Footer() {
  const currentYear = new Date().getFullYear()

  const shopLinks = [
    { label: 'Gift Hampers', path: ROUTE_PATHS.SHOP + '?category=gift-hampers' },
    { label: 'Keychains', path: ROUTE_PATHS.SHOP + '?category=keychains' },
    { label: 'Bags', path: ROUTE_PATHS.SHOP + '?category=bags' },
    { label: 'Bookmarks', path: ROUTE_PATHS.SHOP + '?category=bookmarks' },
    { label: 'All Products', path: ROUTE_PATHS.SHOP },
  ]

  const quickLinks = [
    { label: 'About Us', path: ROUTE_PATHS.ABOUT },
    { label: 'Custom Orders', path: ROUTE_PATHS.CUSTOM_ORDER },
    { label: 'Contact Us', path: ROUTE_PATHS.CONTACT },
    { label: 'My Orders', path: ROUTE_PATHS.MY_ORDERS },
    { label: 'My Wishlist', path: ROUTE_PATHS.WISHLIST },
  ]

  const trustBadges = [
    { label: 'Free Delivery', subtext: 'On orders above ₹999' },
    { label: 'Easy Returns', subtext: '7 days return policy' },
    { label: 'Secure Payments', subtext: '100% safe & trusted' },
    { label: 'WhatsApp Support', subtext: "We're here to help" },
  ]

  const socialLinks = [
    {
      label: 'Follow Gift Coffer on Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'Follow Gift Coffer on Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: 'Chat with Gift Coffer on WhatsApp',
      href: 'https://wa.me/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.525 5.845L.057 23.925a.5.5 0 00.617.617l6.08-1.468A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.007-1.368l-.36-.214-3.724.9.916-3.635-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      ),
    },
  ]

  return (
    <footer
      className="bg-neutral-charcoal text-neutral-white mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Trust badges row */}
      <div className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-1"
              >
                <p className="font-body text-small font-medium text-neutral-white">
                  {badge.label}
                </p>
                <p className="font-body text-caption text-neutral-white/60">
                  {badge.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-heading text-h5 text-neutral-white">
                Gift Coffer
              </p>
              <p className="font-body text-caption text-neutral-white/60 tracking-widest uppercase mt-0.5">
                Thoughtful Gifts, Beautiful Bonds
              </p>
            </div>
            <p className="font-body text-small text-neutral-white/70 leading-relaxed">
              Handmade & personalised gifts crafted with love, for every special occasion.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                
                  <a key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    p-2 rounded-md
                    text-neutral-white/70 hover:text-neutral-white
                    hover:bg-white/10
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-brand-primary
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-small font-semibold text-neutral-white uppercase tracking-widest">
              Shop
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="
                      font-body text-small
                      text-neutral-white/70 hover:text-neutral-white
                      transition-colors duration-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-small font-semibold text-neutral-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="
                      font-body text-small
                      text-neutral-white/70 hover:text-neutral-white
                      transition-colors duration-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-small font-semibold text-neutral-white uppercase tracking-widest">
              Stay Connected
            </h3>
            <p className="font-body text-small text-neutral-white/70 leading-relaxed">
              Get exclusive offers and new collection updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                required
                className="
                  w-full font-body text-small
                  text-neutral-charcoal placeholder:text-neutral-text-muted
                  bg-neutral-white rounded-md
                  px-4 py-2.5 min-h-[44px]
                  border border-transparent
                  focus:outline-none focus:ring-2 focus:ring-brand-primary
                "
              />
              <button
                type="submit"
                className="
                  w-full font-body text-small font-medium
                  bg-brand-primary hover:bg-brand-primary-hover
                  text-white rounded-md
                  px-4 py-2.5 min-h-[44px]
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-brand-primary focus:ring-offset-neutral-charcoal
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="
          max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8
          py-4
          flex flex-col sm:flex-row
          items-center justify-between gap-2
        ">
          <p className="font-body text-caption text-neutral-white/50 text-center">
            © {currentYear} Gift Coffer. All Rights Reserved. Made with ♥ in India.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="font-body text-caption text-neutral-white/50 hover:text-neutral-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/sitemap"
              className="font-body text-caption text-neutral-white/50 hover:text-neutral-white transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer