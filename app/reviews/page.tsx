import { TypographyH1 } from '@/components/typography/TypographyH1'
import { TypographyP } from '@/components/typography/TypographyP'

export const metadata = {
    title: 'Customer Reviews',
    description: 'Customer review management',
}

function page() {
  return (
    <div>
        <TypographyH1>Customer Reviews</TypographyH1>
        <TypographyP>Discover what our customers have to say about their experiences with our products and services. Read honest reviews and testimonials to help you make informed decisions and find the perfect solution for your needs.</TypographyP>
    </div>
  )
}

export default page