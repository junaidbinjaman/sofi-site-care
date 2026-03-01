import {TypographyH1} from '@/components/typography/TypographyH1';
import {TypographyH3} from '@/components/typography/TypographyH3';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {ListBulletIcon, PencilSquareIcon} from '@heroicons/react/24/outline';

function DashboardMeta() {
    return (
        <div>
            <Card className='p-4 mb-4'>
                <TypographyH3>Number of Blogs Published</TypographyH3>
                <TypographyH1>50</TypographyH1>
                <div>
                    <Button>
                        <ListBulletIcon />
                        View All Blogs
                    </Button>
                    <Button variant='outline'>
                        <PencilSquareIcon />
                        Create New Blog
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default DashboardMeta;
