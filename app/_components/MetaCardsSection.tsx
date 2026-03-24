'use client';

import {IoNewspaperOutline} from 'react-icons/io5';
import {FiUsers} from 'react-icons/fi';
import {FaRegStar, FaRegEnvelope} from 'react-icons/fa';
import MetaCard from '../../components/MetaCard';

export default function MetaCardsSection() {
    return (
        <section className='flex gap-8 mt-6'>
            <MetaCard
                icon={IoNewspaperOutline}
                itemCount={10}
                text='Total Blogs'
                color='#155DFC'
                bgPrimary='#2B7FFF'
                bgSecondary='#00D3F3'
                isTrending={true}
                animationDuration={0.3}
            />
            <MetaCard
                icon={FiUsers}
                itemCount={11}
                text='Total Authors'
                color='#096000'
                bgPrimary='#00BC7D'
                bgSecondary='#00D5BE'
                isTrending={false}
                animationDuration={0.5}
            />
            <MetaCard
                icon={FaRegStar}
                itemCount={7}
                text='Total Reviews'
                color='#E17100'
                bgPrimary='#FE9A00'
                bgSecondary='#FF8904'
                isTrending={true}
                animationDuration={0.7}

            />
            <MetaCard
                icon={FaRegEnvelope}
                itemCount={32}
                text='Total Comments'
                color='#7F22FE'
                bgPrimary='#8E51FF'
                bgSecondary='#C27AFF'
                isTrending={true}
                animationDuration={0.9}
            />
        </section>
    );
}
