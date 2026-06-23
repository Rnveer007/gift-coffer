function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  type = 'button',
  onClick,
  className = '',
}) {
  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-body font-medium tracking-wide',
    'rounded-md transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' ')

  const variantStyles = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-card hover:shadow-hover',
    secondary: 'bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    ghost: 'bg-transparent text-brand-primary hover:bg-brand-blush',
    danger: 'bg-error-text hover:opacity-90 text-white',
  }

  const sizeStyles = {
    sm: 'text-small px-4 py-2 min-h-[36px]',
    md: 'text-body-reg px-6 py-3 min-h-[44px]',
    lg: 'text-body-lg px-8 py-4 min-h-[52px]',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      aria-busy={isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button