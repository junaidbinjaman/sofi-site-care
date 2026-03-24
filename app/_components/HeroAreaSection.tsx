import {TypographyH2} from '@/components/typography/TypographyH2';
import {TypographyP} from '@/components/typography/TypographyP';

function HeroAreaSection() {
    return (
        <section>
            <TypographyH2 className='text-foreground'>Dashboard</TypographyH2>
            <TypographyP className='text-secondary-foreground mt-1'>
                Welcome back. Here's what's happening across your platform.
            </TypographyP>
        </section>
    );
}

export default HeroAreaSection;
