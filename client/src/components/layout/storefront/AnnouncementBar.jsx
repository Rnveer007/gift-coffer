function AnnouncementBar({ message, isVisible = true }) {
  if (!isVisible || !message) return null

  return (
    <div
      role="banner"
      aria-label="Site announcement"
      className="
        w-full bg-neutral-charcoal
        py-2 px-4
        flex items-center justify-center
      "
    >
      <p className="
        font-body text-caption font-medium
        text-neutral-white tracking-widest
        uppercase text-center
      ">
        {message}
      </p>
    </div>
  )
}

export default AnnouncementBar