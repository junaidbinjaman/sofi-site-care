// lib/navigation.ts
import {
  HomeIcon,
  UsersIcon,
  StarIcon,
  EnvelopeIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline'

export type NavItem = {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Blogs', href: '/blogs', icon: PencilSquareIcon, current: false },
  { name: 'Authors', href: '/authors', icon: UsersIcon, current: false },
  { name: 'Reviews', href: '/reviews', icon: StarIcon, current: false },
  { name: 'Contacts', href: '/contacts', icon: EnvelopeIcon, current: false },
]