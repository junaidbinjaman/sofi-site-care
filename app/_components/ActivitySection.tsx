'use client';

import {TypographyH3} from '@/components/typography/TypographyH3';
import Link from 'next/link';
import {FiArrowUpRight} from 'react-icons/fi';
import {motion} from 'motion/react';
import BlogPostItem from '@/components/BlogPostItem/BlogPostItem';
import {TypographyP} from '@/components/typography/TypographyP';
import ContactItems from '@/components/ContactItems/ContactItems';

function ActivitySection() {
    return (
        <section className='mt-6.5 flex gap-6.5'>
            {/* Recent Blog Posts */}
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className='w-100 p-5 bg-white rounded-2xl border-[0.833px] border-[rgba(0,0,0,0.06)]'
            >
                {/* Header */}
                <div className='flex justify-between items-center mb-4'>
                    <TypographyH3 className='text-base'>
                        Recent Blog Posts
                    </TypographyH3>
                    <Link
                        href='blogs'
                        className='flex gap-1 text-secondary-foreground hover:text-secondary transition-colors'
                    >
                        View all <FiArrowUpRight />
                    </Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <BlogPostItem
                        title='Getting Started with React 19'
                        author='Sarah Chen'
                        date='2026-03-01'
                        status='Published'
                    />
                    <BlogPostItem
                        title='Modern CSS Techniques for 2026'
                        author='James Miller'
                        date='2026-02-25'
                        status='Published'
                    />
                    <BlogPostItem
                        title='Building Scalable APIs with Node.js'
                        author='Sarah Chen'
                        date='2026-02-25'
                        status='Draft'
                    />
                    <BlogPostItem
                        title='Introduction to AI-Powered Development'
                        author='Priya Sharma'
                        date='2026-02-18'
                        status='Published'
                    />
                </div>
            </motion.div>
            {/* Recent Form Submissions */}
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className='w-100 p-5 bg-white rounded-2xl border-[0.833px] border-[rgba(0,0,0,0.06)]'
            >
                {/* Header */}
                <div className='flex justify-between items-center mb-4'>
                    <TypographyH3 className='text-base'>
                        Recent Form Submissions
                    </TypographyH3>
                    <Link
                        href='/contact'
                        className='flex gap-1 text-secondary-foreground hover:text-secondary transition-colors'
                    >
                        View all <FiArrowUpRight />
                    </Link>
                </div>
                <div>
                    <ContactItems
                        name='John Doe'
                        date='2026-03-09'
                        message='We need a custom dashboard built for our...'
                    />
                    <ContactItems
                        name='Rachel Green'
                        date='2026-03-08'
                        message='We need a custom dashboard built for our...'
                    />
                    <ContactItems
                        name='Michael Lee'
                        date='2026-03-07'
                        message='Following up on our previous conversation about the...'
                    />
                    <ContactItems
                        name='Sophie Adams'
                        date='2026-03-05'
                        message='Love the work on your portfolio!'
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default ActivitySection;
