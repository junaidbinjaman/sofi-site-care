'use client';

import {useState} from 'react';
import {navigation} from '@/lib/navigation';
import Link from 'next/link';
import DashboardNavItem from '@/components/DashboardNavItem/DashboardNavItem';

type Props = {
    children: React.ReactNode;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function AppSidebar({children}: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div>
                <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col dark:bg-gray-900'>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-black/10'>
                        <div className='flex h-16 shrink-0 items-center'>
                            <Link href='/'>
                                <img
                                    alt='Your Company'
                                    src='/all-next-ver-logo.png'
                                    className='h-10 w-auto dark:hidden'
                                />
                                <img
                                    alt='Your Company'
                                    src='/all-next-ver-logo.png'
                                    className='h-8 w-auto not-dark:hidden'
                                />
                            </Link>
                        </div>
                        <nav className='flex flex-1 flex-col'>
                            <ul
                                role='list'
                                className='flex flex-1 flex-col gap-y-7'
                            >
                                <li>
                                    <ul role='list' className='-mx-2 space-y-1'>
                                        {navigation.map((item) => (
                                            <DashboardNavItem key={item.name} {...item} />
                                        ))}
                                    </ul>
                                </li>
                                <li className='-mx-6 mt-auto'>
                                    <a
                                        href='#'
                                        className='flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5'
                                    >
                                        <img
                                            alt=''
                                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                            className='size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10'
                                        />
                                        <span className='sr-only'>
                                            Your profile
                                        </span>
                                        <span aria-hidden='true'>Tom Cook</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <main className='py-10 lg:pl-72'>
                    <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
                </main>
            </div>
        </>
    );
}
