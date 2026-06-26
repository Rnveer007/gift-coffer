export const mockProducts = [
  {
    id: 'prod_001',
    name: 'Pretty in Pink Hamper',
    slug: 'pretty-in-pink-hamper',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500',
      'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500',
    ],
    basePrice: 1299,
    discountedPrice: 999,
    badge: 'bestseller',
    category: 'gift-hampers',
    occasions: ['birthday', 'anniversary'],
    rating: 4.8,
    reviewCount: 124,
    isPreBook: false,
    totalStock: 15,
  },
  {
    id: 'prod_002',
    name: 'The Gentleman Hamper',
    slug: 'the-gentleman-hamper',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    ],
    basePrice: 1499,
    discountedPrice: 1199,
    badge: 'featured',
    category: 'gift-hampers',
    occasions: ['birthday', 'corporate-gifts'],
    rating: 4.6,
    reviewCount: 89,
    isPreBook: false,
    totalStock: 8,
  },
  {
    id: 'prod_003',
    name: 'Together Forever Hamper',
    slug: 'together-forever-hamper',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
    ],
    basePrice: 1799,
    discountedPrice: 1499,
    badge: 'new_arrival',
    category: 'gift-hampers',
    occasions: ['anniversary', 'valentines-day'],
    rating: 4.9,
    reviewCount: 67,
    isPreBook: false,
    totalStock: 3,
  },
  {
    id: 'prod_004',
    name: 'Floral Heart Keychain',
    slug: 'floral-heart-keychain',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500',
    ],
    basePrice: 299,
    discountedPrice: 249,
    badge: 'sale',
    category: 'keychains',
    occasions: ['birthday', 'friendship-day'],
    rating: 4.5,
    reviewCount: 203,
    isPreBook: false,
    totalStock: 50,
  },
  {
    id: 'prod_005',
    name: 'Boho Tote Bag',
    slug: 'boho-tote-bag',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
    ],
    basePrice: 699,
    discountedPrice: null,
    badge: 'new_arrival',
    category: 'bags',
    occasions: ['birthday', 'just-because'],
    rating: 4.7,
    reviewCount: 45,
    isPreBook: false,
    totalStock: 20,
  },
  {
    id: 'prod_006',
    name: 'Wildflower Bookmark Set',
    slug: 'wildflower-bookmark-set',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500',
    ],
    basePrice: 199,
    discountedPrice: 149,
    badge: 'bestseller',
    category: 'bookmarks',
    occasions: ['birthday', 'thank-you'],
    rating: 4.9,
    reviewCount: 312,
    isPreBook: false,
    totalStock: 100,
  },
  {
    id: 'prod_007',
    name: 'Self Love Hamper',
    slug: 'self-love-hamper',
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500',
    ],
    basePrice: 999,
    discountedPrice: 799,
    badge: 'featured',
    category: 'gift-hampers',
    occasions: ['birthday', 'just-because'],
    rating: 4.8,
    reviewCount: 156,
    isPreBook: false,
    totalStock: 12,
  },
  {
    id: 'prod_008',
    name: 'Diwali Celebration Box',
    slug: 'diwali-celebration-box',
    images: [
      'https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?w=500',
    ],
    basePrice: 2499,
    discountedPrice: 1999,
    badge: 'limited_edition',
    category: 'gift-hampers',
    occasions: ['corporate-gifts'],
    rating: 4.7,
    reviewCount: 78,
    isPreBook: true,
    totalStock: 25,
  },
]

export const getFeaturedProducts = () =>
  mockProducts.filter((product) => product.badge === 'featured')

export const getBestsellerProducts = () =>
  mockProducts.filter((product) => product.badge === 'bestseller')

export const getNewArrivalProducts = () =>
  mockProducts.filter((product) => product.badge === 'new_arrival')

export const getProductsByCategory = (categorySlug) =>
  mockProducts.filter((product) => product.category === categorySlug)

export const getProductsByOccasion = (occasionSlug) =>
  mockProducts.filter((product) => product.occasions.includes(occasionSlug))

export const getLowStockProducts = (threshold = 5) =>
  mockProducts.filter((product) => product.totalStock <= threshold)