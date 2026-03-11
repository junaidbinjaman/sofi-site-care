'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'motion/react';

type Props = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function DashboardNavItem({ name, href, icon: Icon }: Props) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <li>
      <motion.div
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <Link
          href={href}
          className={classNames(
            'relative isolate flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold transition-colors',
            isCurrent
              ? 'text-white dark:text-white'
              : 'text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white'
          )}
        >
          {isCurrent && (
            <motion.span
              layoutId='sidebar-active-pill'
              className='absolute inset-0 -z-10 rounded-md bg-primary-gradient primary-shadow dark:bg-white/5'
              transition={{ type: 'spring', stiffness: 380, damping: 27 }}
            />
          )}

          <Icon
            aria-hidden='true'
            className={classNames(
              'size-6 shrink-0 transition-colors',
              isCurrent
                ? 'text-white dark:text-white'
                : 'text-gray-400 group-hover:text-primary dark:group-hover:text-white'
            )}
          />

          <span>{name}</span>
        </Link>
      </motion.div>
    </li>
  );
}

export default DashboardNavItem;