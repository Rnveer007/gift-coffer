import { useState } from 'react'

function FloatingWhatsApp({ phoneNumber, welcomeMessage }) {
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(true)

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(
      welcomeMessage || 'Hi Gift Coffer! I need help with my order.'
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleTooltipDismiss = (e) => {
    e.stopPropagation()
    setIsTooltipVisible(false)
    setHasBeenDismissed(true)
  }

  return (
    <div
      className="fixed bottom-24 right-4 z-50 lg:bottom-8 lg:right-6"
      role="complementary"
      aria-label="WhatsApp support"
    >
      {/* Tooltip */}
      {isTooltipVisible && !hasBeenDismissed && (
        <div
          className="
            absolute bottom-16 right-0
            bg-neutral-white rounded-lg shadow-hover
            px-4 py-3 mb-2
            w-52
            border border-border-light
          "
        >
          <button
            onClick={handleTooltipDismiss}
            aria-label="Dismiss WhatsApp prompt"
            className="
              absolute -top-2 -right-2
              w-5 h-5 rounded-full
              bg-neutral-text-muted text-white
              text-[10px] font-medium
              flex items-center justify-center
              hover:bg-neutral-charcoal
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-brand-primary
            "
          >
            ✕
          </button>
          <p className="font-body text-small font-medium text-neutral-charcoal mb-0.5">
            Need help?
          </p>
          <p className="font-body text-caption text-neutral-text-muted">
            Chat with us on WhatsApp — we're here 24/7
          </p>
          {/* Tooltip arrow */}
          <div
            aria-hidden="true"
            className="
              absolute -bottom-2 right-5
              w-4 h-4
              bg-neutral-white
              border-r border-b border-border-light
              rotate-45
            "
          />
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat with us on WhatsApp"
        className="
          relative
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-hover
          transition-all duration-300
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-green-500
        "
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Pulse ring animation */}
        <span
          aria-hidden="true"
          className="
            absolute inset-0 rounded-full
            animate-ping opacity-20
          "
          style={{ backgroundColor: '#25D366' }}
        />

        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.525 5.845L.057 23.925a.5.5 0 00.617.617l6.08-1.468A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.007-1.368l-.36-.214-3.724.9.916-3.635-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </button>
    </div>
  )
}

export default FloatingWhatsApp