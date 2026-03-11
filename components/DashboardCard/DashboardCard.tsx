import {Card} from '../ui/card';
import {Button} from '../ui/button';
import {ListBulletIcon, PencilSquareIcon} from '@heroicons/react/24/outline';

function DashboardCard() {
    return (
        <Card className='p-4 mb-4'>
            <p className='text-stone-600 text-xl'>Number of Blogs Published</p>
            <p className='text-6xl'>53</p>
            <div className='flex gap-3.5'>
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
    );
}

export default DashboardCard;
