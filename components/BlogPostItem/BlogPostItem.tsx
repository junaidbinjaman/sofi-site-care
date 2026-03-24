import React from 'react';
import {TypographyH3} from '../typography/TypographyH3';
import {TypographyP} from '../typography/TypographyP';

type BlogPostItemProps = {
    title: string;
    author: string;
    date: string;
    status: 'Published' | 'Draft';
};

function BlogPostItem({ title, author, date, status }: BlogPostItemProps) {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3.5 px-0 border-b-[0.833px] border-[rgba(0,0,0,0.04)] last:border-0'>
            <div>
                <TypographyH3 className='text-foreground text-[13px] font-medium'>
                    {title}
                </TypographyH3>
                <p className='text-xs text-secondary-foreground mt-1'>
                    {author} - {date}
                </p>
            </div>
            <TypographyP className={`text-xs px-2.5 py-1 rounded-full ${status === 'Published' ? 'text-[#009966] bg-[#ECFDF5]' : 'text-[#FF0000] bg-[#FFE5E5]'}`}>
                {status}
            </TypographyP>
        </div>
    );
}

export default BlogPostItem;
