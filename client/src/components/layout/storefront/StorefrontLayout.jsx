import AnnouncementBar from './AnnouncementBar'
import Header from './Header'
import MobileBottomNav from './MobileBottomNav'
import Footer from './Footer'

function StorefrontLayout({ children }) {
  const announcementMessage = 'Free delivery on orders above ₹999'
  const isAnnouncementVisible = true

  return (
    <div className="flex flex-col min-h-screen bg-neutral-ivory">

      <AnnouncementBar
        message={announcementMessage}
        isVisible={isAnnouncementVisible}
      />

      <Header />

      <main
        id="main-content"
        className="flex-1 pb-20 lg:pb-0"
        role="main"
      >
        {children}
      </main>

      <Footer />

      <MobileBottomNav />

    </div>
  )
}

export default StorefrontLayout