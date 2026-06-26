// This file powers the header navigation dropdowns,
// the Shop by Category section on the homepage,
// and the filter sidebar on the Shop page.
//
// Structure mirrors what the real MongoDB Category
// model will return from the API in Milestone 8.
// Swapping mock → real is a one-line change per
// component when that time comes.

export const mockCategories = [
  // ── SHOP dropdown ──────────────────────────────
  {
    id: 'cat_001',
    name: 'Gift Hampers',
    slug: 'gift-hampers',
    type: 'category',
    parentId: null,
    navGroup: 'shop',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400',
    description: 'For every occasion',
    displayOrder: 1,
    children: [
      { id: 'cat_001_a', name: 'For Her', slug: 'hampers-for-her', parentId: 'cat_001' },
      { id: 'cat_001_b', name: 'For Him', slug: 'hampers-for-him', parentId: 'cat_001' },
      { id: 'cat_001_c', name: 'For Couples', slug: 'hampers-for-couples', parentId: 'cat_001' },
      { id: 'cat_001_d', name: 'For Kids', slug: 'hampers-for-kids', parentId: 'cat_001' },
      { id: 'cat_001_e', name: 'Corporate Gifts', slug: 'corporate-gifts', parentId: 'cat_001' },
      { id: 'cat_001_f', name: 'Self Love', slug: 'self-love', parentId: 'cat_001' },
    ],
  },
  {
    id: 'cat_002',
    name: 'Keychains',
    slug: 'keychains',
    type: 'category',
    parentId: null,
    navGroup: 'shop',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400',
    description: 'Handmade & cute',
    displayOrder: 2,
    children: [
      { id: 'cat_002_a', name: 'Floral', slug: 'floral-keychains', parentId: 'cat_002' },
      { id: 'cat_002_b', name: 'Personalised', slug: 'personalised-keychains', parentId: 'cat_002' },
    ],
  },
  {
    id: 'cat_003',
    name: 'Bags',
    slug: 'bags',
    type: 'category',
    parentId: null,
    navGroup: 'shop',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    description: 'Stylish & functional',
    displayOrder: 3,
    children: [
      { id: 'cat_003_a', name: 'Tote Bags', slug: 'tote-bags', parentId: 'cat_003' },
      { id: 'cat_003_b', name: 'Gift Bags', slug: 'gift-bags', parentId: 'cat_003' },
    ],
  },
  {
    id: 'cat_004',
    name: 'Bookmarks',
    slug: 'bookmarks',
    type: 'category',
    parentId: null,
    navGroup: 'shop',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    description: 'For book lovers',
    displayOrder: 4,
    children: [
      { id: 'cat_004_a', name: 'Floral', slug: 'floral-bookmarks', parentId: 'cat_004' },
      { id: 'cat_004_b', name: 'Personalised', slug: 'personalised-bookmarks', parentId: 'cat_004' },
    ],
  },
  {
    id: 'cat_005',
    name: 'Curtain Holders',
    slug: 'curtain-holders',
    type: 'category',
    parentId: null,
    navGroup: 'shop',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    description: 'Elegant touch',
    displayOrder: 5,
    children: [],
  },
  {
    id: 'cat_006',
    name: 'Tissue Holders',
    slug: 'tissue-holders',
    type: 'category',
    parentId: null,
    navGroup: 'shop',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
    description: 'Useful & aesthetic',
    displayOrder: 6,
    children: [],
  },

  // ── GIFT HAMPERS dropdown ───────────────────────
  {
    id: 'cat_007',
    name: 'For Her',
    slug: 'hampers-for-her',
    type: 'category',
    parentId: 'cat_001',
    navGroup: 'gift-hampers',
    displayOrder: 1,
    children: [],
  },
  {
    id: 'cat_008',
    name: 'For Him',
    slug: 'hampers-for-him',
    type: 'category',
    parentId: 'cat_001',
    navGroup: 'gift-hampers',
    displayOrder: 2,
    children: [],
  },
  {
    id: 'cat_009',
    name: 'For Couples',
    slug: 'hampers-for-couples',
    type: 'category',
    parentId: 'cat_001',
    navGroup: 'gift-hampers',
    displayOrder: 3,
    children: [],
  },
  {
    id: 'cat_010',
    name: 'For Kids',
    slug: 'hampers-for-kids',
    type: 'category',
    parentId: 'cat_001',
    navGroup: 'gift-hampers',
    displayOrder: 4,
    children: [],
  },
  {
    id: 'cat_011',
    name: 'Corporate Gifts',
    slug: 'corporate-gifts',
    type: 'category',
    parentId: 'cat_001',
    navGroup: 'gift-hampers',
    displayOrder: 5,
    children: [],
  },

  // ── OCCASIONS dropdown ──────────────────────────
  {
    id: 'occ_001',
    name: 'Birthday',
    slug: 'birthday',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 1,
    children: [],
  },
  {
    id: 'occ_002',
    name: 'Anniversary',
    slug: 'anniversary',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 2,
    children: [],
  },
  {
    id: 'occ_003',
    name: "Valentine's Day",
    slug: 'valentines-day',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 3,
    children: [],
  },
  {
    id: 'occ_004',
    name: 'Friendship Day',
    slug: 'friendship-day',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 4,
    children: [],
  },
  {
    id: 'occ_005',
    name: 'Raksha Bandhan',
    slug: 'raksha-bandhan',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 5,
    children: [],
  },
  {
    id: 'occ_006',
    name: 'Thank You',
    slug: 'thank-you',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 6,
    children: [],
  },
  {
    id: 'occ_007',
    name: 'Just Because',
    slug: 'just-because',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 7,
    children: [],
  },
  {
    id: 'occ_008',
    name: 'Corporate Gifts',
    slug: 'corporate-gifting',
    type: 'occasion',
    parentId: null,
    navGroup: 'occasions',
    displayOrder: 8,
    children: [],
  },
]

// ── Helper functions ────────────────────────────────

export const getNavGroupCategories = (navGroup) =>
  mockCategories.filter(
    (category) =>
      category.navGroup === navGroup && category.parentId === null
  )

export const getShopCategories = () =>
  mockCategories.filter(
    (category) =>
      category.type === 'category' && category.parentId === null
  )

export const getOccasions = () =>
  mockCategories.filter((category) => category.type === 'occasion')

export const getCategoryBySlug = (slug) =>
  mockCategories.find((category) => category.slug === slug)

export const getChildCategories = (parentId) =>
  mockCategories.filter((category) => category.parentId === parentId)