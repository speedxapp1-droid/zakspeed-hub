/**
 * Central content and link config for the ZakSpeed hub.
 * Update this file to change copy, URLs, navigation, and production SEO.
 */
export const site = {
  name: 'Zak Speed',
  brand: 'ZakSpeed',
  handle: '@ZakSpeed',
  identity: 'Athlete • Creator • Entrepreneur',
  identityParts: ['Athlete', 'Creator', 'Entrepreneur'],
  founderLine: 'Founder of SpeedX',
  role: 'Computer Science student',
  positioning: 'Building, competing, creating, and documenting the work in public.',
  bio: 'Athlete and entrepreneur documenting calisthenics, running, lifestyle, entertainment, and the process of building SpeedX.',
  about:
    'ZakSpeed is an athlete, creator, and entrepreneur documenting the work as it happens — training physically, making real-life content, and building products.',
  aboutStory:
    'He is a Computer Science student and the founder of SpeedX. The through-line is the same across training, content, and technology: learn, build, and share the process.',
  email: 'zakspeedbusiness@gmail.com',
  mailto:
    'mailto:zakspeedbusiness@gmail.com?subject=Brand%20Collaboration%20Inquiry',
  /**
   * PRODUCTION URL — the only place to set the live origin.
   * No trailing slash. Example: 'https://www.your-confirmed-domain.com'
   *
   * Leave '' until a domain is confirmed. Do not use an unowned domain.
   * Canonical and Open Graph URLs are derived from this value.
   */
  siteUrl: '',
  /**
   * Public path to the Open Graph image, e.g. '/og-image.png'.
   * Leave '' until public/og-image.png (or equivalent) actually exists.
   */
  ogImage: '',
  seo: {
    title: 'ZakSpeed — Athlete, Creator & Founder of SpeedX',
    description:
      'ZakSpeed is an athlete, creator and entrepreneur documenting fitness, lifestyle and entertainment while building SpeedX, a challenge-based social platform.',
  },
  pillars: [
    {
      title: 'Physical performance',
      text: 'Calisthenics, sprinting, bodybuilding, backflips, and athletic challenges.',
    },
    {
      title: 'Content creation',
      text: 'Lifestyle, entertainment, and real-life experiences across social platforms.',
    },
    {
      title: 'Technology',
      text: 'Computer Science study applied to product thinking and building in public.',
    },
    {
      title: 'Entrepreneurship',
      text: 'Founding and developing SpeedX while learning the startup process.',
    },
  ],
  speedx: {
    name: 'SpeedX',
    url: 'https://speedxapp.io/',
    description:
      'A challenge-based social platform designed around creating, competing, connecting and earning recognition through structured challenges and points.',
    cta: 'Explore SpeedX',
  },
  socials: [
    {
      id: 'tiktok',
      name: 'TikTok',
      href: 'https://www.tiktok.com/@zakspeedy',
      handle: '@zakspeedy',
      action: 'Follow',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://www.instagram.com/zakspeeed/',
      handle: '@zakspeeed',
      action: 'Follow',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://www.youtube.com/@ZakSpeedofficial',
      handle: '@ZakSpeedofficial',
      action: 'Watch',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1Bvoyq9QAB/',
      handle: 'ZakSpeed',
      action: 'Follow',
    },
  ],
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Content', href: '#content' },
    { label: 'SpeedX', href: '#speedx' },
    { label: 'Collaborate', href: '#collaborate' },
    { label: 'Contact', href: '#contact' },
  ],
  contentAreas: [
    {
      id: 'athletic',
      title: 'Athletic',
      description:
        'Training, movement, and physical progress documented as it happens.',
      tags: [
        'Calisthenics',
        'Running',
        'Sprinting',
        'Bodybuilding',
        'Fitness',
        'Backflips',
        'Athletic challenges',
      ],
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle',
      description:
        'Daily discipline, experiences, and the process behind the work.',
      tags: [
        'Daily routines',
        'Personal growth',
        'Experiences',
        'Challenges',
        'Travel',
        'Entertainment',
      ],
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship',
      description:
        'Founding SpeedX, learning in public, and building products.',
      tags: [
        'Building SpeedX',
        'Startup journey',
        'Technology',
        'Product development',
        'Learning',
        'Business',
      ],
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      description:
        'Creator content across platforms — athletic, lifestyle, and real-life stories.',
      tags: ['TikTok', 'Instagram', 'YouTube', 'Facebook', 'Brand collaborations'],
    },
  ],
  collaborate: {
    headline: 'Work with ZakSpeed',
    status: 'Open to collaborations',
    text: 'Available for brand partnerships, campaigns, product collaborations, events, and creator opportunities. Get in touch to discuss a fit.',
    cta: 'Business inquiries',
    categories: [
      'Sports & fitness',
      'Fashion',
      'Lifestyle',
      'Technology',
      'Automotive',
      'Food & beverage',
      'Travel & experiences',
      'Entrepreneurship',
    ],
    previousNote:
      'Previous partnerships will be listed here as they are published. None are shown yet.',
  },
  media: {
    headline: 'Media Kit — Coming Soon',
    text: 'Collaboration information, brand assets, and creator statistics will be published here when they are ready. For current brand inquiries, email directly.',
  },
  finalCta: {
    headline: 'Follow the journey.',
  },
}
