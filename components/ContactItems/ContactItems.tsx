import { TypographyP } from '../typography/TypographyP';

type ContactItemsProps = {
    name: string;
    date: string;
    message: string;
};

function ContactItems({ name, date, message }: ContactItemsProps) {
    return (
        <div className='flex flex-col gap-4 py-4 border-b-[0.833px] border-[rgba(0,0,0,0.04)] last:border-0'>
            <div className='flex gap-2.5 w-full'>
                <div className='bg-[linear-gradient(135deg,#A684FF_0%,#7C86FF_100%)] w-7.5 h-7.5 rounded-full text-white flex items-center justify-center'>
                    {name.charAt(0)}
                </div>
                <div>
                    <div className='flex justify-between w-77.5'>
                        <TypographyP className='text-base font-medium text-foreground'>
                            {name}
                        </TypographyP>
                        <TypographyP className='text-xs text-secondary-foreground'>
                            {date}
                        </TypographyP>
                    </div>
                    <TypographyP className='text-sm text-secondary-foreground mt-1'>
                        {message}
                    </TypographyP>
                </div>
            </div>
        </div>
    );
}

export default ContactItems;
