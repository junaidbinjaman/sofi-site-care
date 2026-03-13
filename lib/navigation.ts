// lib/navigation.ts
import { TbLayoutDashboard } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";


export type NavItem = {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const navigation = [
  { name: 'Dashboard', href: '/', icon: TbLayoutDashboard, description: 'Overview & insights', current: true },
  { name: 'Blogs', href: '/blogs', icon: IoNewspaperOutline, description: 'Manage blog post', current: false },
  { name: 'Authors', href: '/author', icon: LuUsersRound, description: 'Manage authors', current: false },
  { name: 'Reviews', href: '/reviews', icon: LuStar, description: 'Manage reviews', current: false },
  { name: 'Contacts', href: '/contact', icon: HiOutlineEnvelope, description: 'Check user contacts', current: false },
]