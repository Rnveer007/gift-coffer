function StarRating({
  rating = 0,
  maxStars = 5,
  reviewCount = null,
  isInteractive = false,
  onRatingSelect = null,
  className = '',
}) {
  const handleStarClick = (selectedRating) => {
    if (isInteractive && onRatingSelect) {
      onRatingSelect(selectedRating)
    }
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      role={isInteractive ? 'radiogroup' : 'img'}
      aria-label={
        isInteractive
          ? 'Select a rating'
          : `Rated ${rating} out of ${maxStars} stars`
      }
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, index) => {
          const starPosition = index + 1
          const isFilled = starPosition <= Math.floor(rating)
          const isHalf =
            !isFilled &&
            starPosition === Math.ceil(rating) &&
            rating % 1 !== 0

          return (
            <span
              key={starPosition}
              onClick={() => handleStarClick(starPosition)}
              role={isInteractive ? 'radio' : undefined}
              aria-checked={isInteractive ? starPosition === rating : undefined}
              aria-label={
                isInteractive ? `${starPosition} star` : undefined
              }
              className={`
                text-brand-gold
                ${isInteractive
                  ? 'cursor-pointer hover:scale-110 transition-transform duration-150'
                  : 'cursor-default'
                }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`
                  ${isFilled
                    ? 'fill-brand-gold stroke-brand-gold'
                    : isHalf
                    ? 'fill-brand-gold/50 stroke-brand-gold'
                    : 'fill-none stroke-brand-gold'
                  }
                `}
                strokeWidth="1.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
          )
        })}
      </div>

      {reviewCount !== null && (
        <span className="font-body text-small text-neutral-text-muted">
          ({reviewCount.toLocaleString('en-IN')})
        </span>
      )}
    </div>
  )
}

export default StarRating