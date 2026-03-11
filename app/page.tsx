import {TypographyH1} from '@/components/typography/TypographyH1';
import DashboardMeta from './_components/DashboardMeta';
import Navbar from './_components/Navbar';
import Example from './_components/Example';
import Card from './_components/Card';

export const metadata = {
    title: 'Dashboard - Website Overview',
    description: 'Provide an overview of your blogging activity',
};

export default function Page() {
    return (
        <section>
            <Navbar />
            <TypographyH1>Dashboard</TypographyH1>
            <DashboardMeta />
            <Example />
            <Card className="mt-10" />
        </section>
    );
}
