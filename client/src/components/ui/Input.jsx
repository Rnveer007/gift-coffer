function Input({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  errorMessage = '',
  helperText = '',
  isDisabled = false,
  isRequired = false,
  className = '',
}) {
  const inputId = `input-${name}`

  const baseInputStyles = [
    'w-full font-body text-body-reg',
    'text-neutral-charcoal placeholder:text-neutral-text-muted',
    'bg-neutral-white rounded-md px-4 py-3 min-h-[44px]',
    'border transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-beige',
  ].join(' ')

  const borderStyles = errorMessage
    ? 'border-error-border focus:ring-error-text'
    : 'border-border-input focus:border-border-input-focus'

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="font-body text-small font-medium text-neutral-charcoal"
        >
          {label}
          {isRequired && (
            <span className="text-error-text ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-invalid={!!errorMessage}
        aria-describedby={
          errorMessage
            ? `${inputId}-error`
            : helperText
            ? `${inputId}-helper`
            : undefined
        }
        className={`${baseInputStyles} ${borderStyles}`}
      />

      {errorMessage && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="font-body text-caption text-error-text flex items-center gap-1"
        >
          {errorMessage}
        </p>
      )}

      {helperText && !errorMessage && (
        <p
          id={`${inputId}-helper`}
          className="font-body text-caption text-neutral-text-muted"
        >
          {helperText}
        </p>
      )}
    </div>
  )
}

export default Input