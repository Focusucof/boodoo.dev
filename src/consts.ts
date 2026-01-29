import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Devin Boodoo',
  description:
    'Computer Science Student, Frontend & Backend Developer, and Cybersecurity Enthusiast.',
  href: 'https://boodoo.dev',
  author: 'Devin Boodoo',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:contact@boodoo.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
