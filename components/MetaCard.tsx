'use client';

import {TypographyP} from '@/components/typography/TypographyP';
import {IoIosTrendingUp} from 'react-icons/io';
import {TypographyH2} from '@/components/typography/TypographyH2';
import {cn} from '@/lib/utils';
import {ElementType} from 'react';
import {IoTrendingDown} from 'react-icons/io5';
import {motion} from 'motion/react';

type MetaCardProps = {
    icon: ElementType;
    itemCount: number;
    text: string;
    color: string;
    bgPrimary: string;
    bgSecondary: string;
    isTrending: boolean;
    animationDuration?: number; // Optional prop for animation duration
};

function MetaCard({
    icon: Icon,
    itemCount,
    text,
    color,
    bgPrimary,
    bgSecondary,
    isTrending,
    animationDuration = 0.5,
}: MetaCardProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            whileHover={{y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.09)', transition: {duration: 0.2}}}
            transition={{duration: animationDuration}}
            className='bg-white p-6.25 rounded-2xl border-[0.833px] flex flex-col gap-y-7 flex-1'
        >
            <div className='flex justify-between items-start'>
                <div
                    className={cn('text-white p-3 rounded-lg w-fit')}
                    style={{
                        background: `linear-gradient(135deg, ${bgPrimary} 0%, ${bgSecondary} 100%)`,
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.10)',
                    }}
                >
                    <Icon className='text-lg' />
                </div>
                <div className='flex gap-1'>
                    {isTrending ? (
                        <IoIosTrendingUp
                            className={cn(`text-base`)}
                            style={{color}}
                        />
                    ) : (
                        <IoTrendingDown
                            className={cn(`text-base`)}
                            style={{color}}
                        />
                    )}
                    <p style={{color}}>+2 this week</p>
                </div>
            </div>
            <div className='flex gap-1 items-end'>
                <TypographyH2 className='leading-7'>{itemCount}</TypographyH2>
                <TypographyP>{text}</TypographyP>
            </div>
        </motion.div>
    );
}

export default MetaCard;
