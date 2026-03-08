import {TypographyBlockquote} from '@/components/typography/TypographyBlockquote';
import {TypographyH1} from '@/components/typography/TypographyH1';
import {TypographyH2} from '@/components/typography/TypographyH2';
import {TypographyH3} from '@/components/typography/TypographyH3';
import {TypographyH4} from '@/components/typography/TypographyH4';
import {TypographyP} from '@/components/typography/TypographyP';

export const metadata = {
    title: 'App Router',
    description:
        'App Router is the new file-based router in Next.js 13. It provides a more intuitive and powerful way to define routes and layouts in your application.',
};

export default function Page() {
    return (
        <section>
            <TypographyH1>Heading Level 1</TypographyH1>
            <TypographyH2>Heading Level 2</TypographyH2>
            <TypographyH3>Heading Level 3</TypographyH3>
            <TypographyH4>Heading Level 4</TypographyH4>
            <TypographyP>Paragraph text goes here.</TypographyP>
            <TypographyBlockquote>
                Blockquote text goes here.
            </TypographyBlockquote>
        </section>
    );
}
