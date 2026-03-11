'use client';

import {Card} from '@/components/ui/card';
import {ListBulletIcon, PencilSquareIcon} from '@heroicons/react/24/outline';
import {AnimatePresence, motion} from 'motion/react';
import {useState} from 'react';

function DashboardMeta() {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Tasks',
            value: '12',
            description: 'Open items',
            icon: ListBulletIcon,
        },
        {
            id: 2,
            title: 'Drafts',
            value: '4',
            description: 'Pending review',
            icon: PencilSquareIcon,
        },
        {
            id: 3,
            title: 'Notes',
            value: '8',
            description: 'Saved updates',
            icon: ListBulletIcon,
        },
        {
            id: 4,
            title: 'Edits',
            value: '3',
            description: 'Recent changes',
            icon: PencilSquareIcon,
        },
    ]);

    const handleVisibility = (id: number) => {
        setCards((prev) => prev.filter((card) => card.id !== id));
    };

    return (
        <div className='max-w-4xl ml-40'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <AnimatePresence>
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                whileHover={{y: -30, transition: {duration: 0.5, delay: 0}}}
                                transition={{duration: 0.3, delay: cards.indexOf(card) * 0.1}}
                                exit={{y: -10, opacity: 0}}
                            >
                                <Card className='rounded-2xl border border-slate-200 p-5 shadow-sm'>
                                    <div className='mb-4 flex items-center justify-between'>
                                        <span className='text-sm font-medium text-slate-600'>
                                            {card.title}
                                        </span>

                                        <Icon
                                            className='h-5 w-5 text-slate-400 cursor-pointer'
                                            onClick={() =>
                                                handleVisibility(card.id)
                                            }
                                        />
                                    </div>

                                    <div className='text-2xl font-semibold text-slate-900'>
                                        {card.value}
                                    </div>

                                    <p className='mt-1 text-sm text-slate-500'>
                                        {card.description}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default DashboardMeta;
