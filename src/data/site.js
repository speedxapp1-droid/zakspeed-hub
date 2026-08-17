/**
 * Central content and link config for the ZakSpeed hub.
 * Update this file to change copy, URLs, navigation, and production SEO.
 */
export const site = {
  name: 'Zak Speed',
  legalName: 'Zakaria Adam',
  brand: 'ZakSpeed',
  handle: '@ZakSpeed',
  identity: 'Athlete • Creator • Entrepreneur',
  identityParts: ['Athlete', 'Creator', 'Entrepreneur'],
  founderLine: 'Founder of SpeedX',
  role: 'Computer Science student specializing in Cybersecurity',
  education: 'Al-Bukhari International University, Malaysia',
  positioning: 'Building, competing, creating, and documenting the work in public.',
  bio: 'Athlete and entrepreneur documenting calisthenics, running, lifestyle, entertainment, and the process of building SpeedX.',
  about:
    'ZakSpeed is an athlete, creator, and entrepreneur documenting the work as it happens — training physically, making real-life content, and building products.',
  aboutStory:
    'He is a Computer Science student specializing in Cybersecurity at Al-Bukhari International University, Malaysia, and the founder of SpeedX. The through-line is the same across training, content, and technology: learn, build, and share the process.',
  email: 'zakspeed.business@gmail.com',
  mailto:
    'mailto:zakspeed.business@gmail.com?subject=Brand%20Collaboration%20Inquiry',
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
      text: 'Computer Science study in Cybersecurity, applied to product thinking and building in public.',
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
      href: 'https://www.tiktok.com/@zakspeedy?_r=1&_t=ZS-98vqpP2lLYv',
      handle: '@zakspeedy',
      action: 'Follow',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://www.instagram.com/zakspeeed?igsh=MW5zZjkzN2RyNnpleA%3D%3D&utm_source=qr',
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
      href: 'https://www.facebook.com/share/1HT4dsctgk/?mibextid=wwXIfr',
      handle: 'ZakSpeed',
      action: 'Follow',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zakaria-adam-14b3223a8',
      handle: 'Zakaria Adam',
      action: 'Connect',
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
    id: 'media-kit',
    type: 'pdf',
    headline: 'Media Kit',
    title: 'Media Kit',
    text: 'A professional media kit for brands, agencies, marketing managers, and collaboration partners.',
    cta: 'View Media Kit',
    href: '/media/media-kit/ZakSpeed_Professional_Creator_Media_Kit.pdf',
  },
  photos: [
    {
      id: 'athletic',
      type: 'image',
      title: 'Athletic',
      alt: 'ZakSpeed sprinting in a studio setting',
      src: '/media/photos/athletic.png',
    },
    {
      id: 'backflip',
      type: 'image',
      title: 'Backflip',
      alt: 'ZakSpeed performing a backflip',
      src: '/media/photos/backflip.png',
    },
    {
      id: 'lifestyle',
      type: 'image',
      title: 'Lifestyle',
      alt: 'ZakSpeed lifestyle portrait',
      src: '/media/photos/zakspeed-lifestyle.png',
    },
  ],
  videos: {
    featured: {
      id: 'N_3t8aoxoHA',
      type: 'video',
      title: 'ZakSpeed — creator, athlete, and founder of SpeedX',
      href: 'https://youtu.be/N_3t8aoxoHA',
    },
    supporting: [
      {
        id: 'L0AEMuki3cA',
        type: 'video',
        title: 'ZakSpeed on YouTube',
        href: 'https://youtu.be/L0AEMuki3cA',
      },
      {
        id: '_bHLXY4HvM0',
        type: 'video',
        title: 'ZakSpeed Shorts',
        href: 'https://youtube.com/shorts/_bHLXY4HvM0',
      },
    ],
  },
  finalCta: {
    headline: 'Follow the journey.',
  },
}
