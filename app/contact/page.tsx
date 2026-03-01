import { TypographyH1 } from '@/components/typography/TypographyH1'
import { TypographyP } from '@/components/typography/TypographyP'

export const metadata = {
    title: 'Contact Us',
    description: 'Submitted contact form management',
}

function page() {
  return (
    <div>
        <TypographyH1>Contact Us</TypographyH1>
        <TypographyP>Get in touch with us for any inquiries, support, or feedback. We're here to help and ensure you have the best experience possible.</TypographyP>
    </div>
  )
}

export default page