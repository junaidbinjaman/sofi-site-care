import Link from 'next/link';
import React from 'react';

type Props = {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    current?: boolean;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

function DashboardNavItem({ name, href, icon: Icon, current = false }: Props) {
    return (
        <li key={name}>
            <Link
                href={href}
                className={classNames(
                    current
                        ? 'bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                )}
            >
                <Icon
                    aria-hidden='true'
                    className={classNames(
                        current
                            ? 'text-indigo-600 dark:text-white'
                            : 'text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white',
                        'size-6 shrink-0',
                    )}
                />
                {name}
            </Link>
        </li>
    );
}

export default DashboardNavItem;
