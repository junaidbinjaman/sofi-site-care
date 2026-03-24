'use client';
import {LuCalendarDays} from 'react-icons/lu';
import {LuActivity} from 'react-icons/lu';
import {FaPlus} from 'react-icons/fa6';
import {motion} from 'motion/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import {useState} from 'react';
import clsx from 'clsx';
import {FiUserPlus} from 'react-icons/fi';
import {navigation} from '@/lib/navigation';
import {usePathname} from 'next/navigation';

function Header() {
    const [isActionMenuActive, setIsActionMenuActive] = useState(false);
    const pathName = usePathname();
    const activePage = navigation.find((el) => el.href === pathName);

    const date = new Date();
    const today = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        weekday: 'long',
        day: 'numeric'
    }) // Monday, Mar 9, 2026

    return (
        <section className='bg-white border-b-[0.833px] border-b-[rgba(255, 255, 255, 0.60)] sticky top-0 py-3'>
            <div className='flex justify-between max-w-6xl mx-auto px-5'>
                {/* Header left */}
                <div className='flex justify-around items-center'>
                    <div className='border-r-2 border-r-[rgba(0,0,0,0.06)] pr-4'>
                        <h4 className='text-foreground font-semibold'>
                            {activePage?.name}
                        </h4>
                        <p className='text-secondary-foreground text-xs'>
                            {activePage?.description}
                        </p>
                    </div>
                    <div className='flex gap-1.5 items-center pl-4'>
                        <LuCalendarDays className='text-secondary-foreground text-base' />
                        <p className='text-secondary-foreground text-xs'>
                            {today}
                        </p>
                    </div>
                    <div className='flex items-center pl-12'>
                        <div className='flex gap-1.5 items-center border border-[#D0FAE5] bg-[#ECFDF5] text-[#009966] px-5 py-1 w-fit rounded-full text-xs'>
                            <LuActivity />
                            All systems online
                        </div>
                    </div>
                </div>

                {/* Header right */}
                <div className='flex items-center justify-end'>
                    <div className='pr-3 border-r-2 border-r-[rgba(0,0,0,0.06)]'>
                        <DropdownMenu onOpenChange={setIsActionMenuActive}>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={clsx(
                                        isActionMenuActive
                                            ? 'bg-[#EDE9FE] text-primary'
                                            : 'bg-primary-gradient text-white',
                                        'px-3 py-1.5 rounded-full flex items-center gap-2.5 cursor-pointer text-xs transition-colors duration-200',
                                    )}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: isActionMenuActive ? 45 : 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <FaPlus />
                                    </motion.div>
                                    Quick Actions
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='mt-2.5 w-60 p-3.5'>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel className='uppercase text-muted-foreground text-[10px]'>
                                        Navigate to
                                    </DropdownMenuLabel>

                                    {navigation.map((el) => {
                                        if (el.name === 'Dashboard') return;
                                        return (
                                            <DropdownMenuItem>
                                                <Link href={el.href}>
                                                    <motion.div
                                                        whileHover={{x: 2}}
                                                        className='flex items-center gap-3 w-full py-2'
                                                    >
                                                        <div className='bg-background p-2.5 rounded-lg text-secondary-foreground'>
                                                            <el.icon className='w-2.5 h-auto' />
                                                        </div>
                                                        <p>
                                                            {el.name}
                                                            <br />
                                                            <small className='text-[11px] text-muted-foreground!'>
                                                                {el.description}
                                                            </small>
                                                        </p>
                                                    </motion.div>
                                                </Link>
                                            </DropdownMenuItem>
                                        );
                                    })}
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href='/contact'>
                                            <motion.div
                                                whileHover={{x: 2}}
                                                className='flex items-center gap-3 w-full py-2'
                                            >
                                                <div className='bg-primary-gradient p-2.5 rounded-lg'>
                                                    <FiUserPlus className='w-2.5 h-auto text-white' />
                                                </div>
                                                <p>
                                                    Invite User
                                                    <br />
                                                    <small className='text-[11px] text-muted-foreground!'>
                                                        Add a team member
                                                    </small>
                                                </p>
                                            </motion.div>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='flex gap-2.5 items-center pl-3'>
                        <p className='text-foreground leading-4 text-[13px]'>
                            Sarah Chen
                            <br />
                            <small className='text-secondary-foreground text-[10px]'>
                                Site Manager
                            </small>
                        </p>
                        <div className='p-2 rounded-full bg-primary-gradient w-10 h-10 flex text-white justify-center'>
                            S
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
