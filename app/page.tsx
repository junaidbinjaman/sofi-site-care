import {TypographyH2} from '@/components/typography/TypographyH2';
import {TypographyP} from '@/components/typography/TypographyP';
import MetaCardsGrid from './_components/MetaCardsSection';
import HeroAreaSection from './_components/HeroAreaSection';
import ActivitySection from './_components/ActivitySection';

export const metadata = {
    title: 'Dashboard - Website Overview',
    description: 'Provide an overview of your blogging activity',
};

export default function Page() {
    return (
        <div className='py-5'>
            <HeroAreaSection />
            <MetaCardsGrid />
            <ActivitySection />
        </div>
    );
}
