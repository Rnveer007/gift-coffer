function Spinner({ size = 'md', color = 'brand', className = '' }) {
  const sizeStyles = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-[3px]',
    xl: 'h-16 w-16 border-4',
  }

  const colorStyles = {
    brand: 'border-brand-blush border-t-brand-primary',
    white: 'border-white/30 border-t-white',
    muted: 'border-neutral-beige border-t-neutral-text-muted',
  }

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`
        inline-block rounded-full animate-spin
        ${sizeStyles[size]}
        ${colorStyles[color]}
        ${className}
      `}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner