'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

function DashboardNavItem({ name, href, icon: Icon }: Props) {
    const pathName = usePathname();
    const isCurrent = pathName === href;

    return (
        <li key={name}>
            <Link
                href={href}
                className={classNames(
                    isCurrent
                        ? 'bg-gray-50 text-primary dark:bg-white/5 dark:text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                )}
            >
                <Icon
                    aria-hidden='true'
                    className={classNames(
                        isCurrent
                            ? 'text-primary dark:text-white'
                            : 'text-gray-400 group-hover:text-primary dark:group-hover:text-white',
                        'size-6 shrink-0',
                    )}
                />
                {name}
            </Link>
        </li>
    );
}

export default DashboardNavItem;
