const BADGE_STYLES = {
  bestseller: 'bg-brand-primary text-white',
  new_arrival: 'bg-neutral-charcoal text-white',
  sale: 'bg-error-text text-white',
  featured: 'bg-brand-gold text-white',
  pre_book: 'bg-info-text text-white',
  limited_edition: 'bg-brand-taupe text-neutral-charcoal',
  sold_out: 'bg-neutral-text-muted text-white',
  flash_sale: 'bg-warning-text text-white',
  price_drop: 'bg-success-text text-white',
  out_of_stock: 'bg-neutral-beige text-neutral-text-secondary border border-border-divider',
}

function Badge({ type, className = '' }) {
  const BADGE_LABELS = {
    bestseller: 'Bestseller',
    new_arrival: 'New Arrival',
    sale: 'Sale',
    featured: 'Featured',
    pre_book: 'Pre-book',
    limited_edition: 'Limited Edition',
    sold_out: 'Sold Out',
    flash_sale: 'Flash Sale',
    price_drop: 'Price Drop',
    out_of_stock: 'Out of Stock',
  }

  const badgeStyle = BADGE_STYLES[type]
  const badgeLabel = BADGE_LABELS[type]

  if (!badgeStyle || !badgeLabel) return null

  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-body text-caption font-medium
        px-2.5 py-1 rounded-sm
        tracking-wide uppercase
        ${badgeStyle}
        ${className}
      `}
      aria-label={badgeLabel}
    >
      {badgeLabel}
    </span>
  )
}

export default Badge