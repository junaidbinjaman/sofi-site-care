import { TypographyH1 } from '@/components/typography/TypographyH1'
import { TypographyP } from '@/components/typography/TypographyP'

export const metadata = {
    title: 'Author Page',
    description: 'Author management page',
}

function page() {
  return (
    <div>
        <TypographyH1>Welcome to Your Author Page</TypographyH1>
        <TypographyP>Discover your creative potential and share your unique voice with our vibrant community of readers and writers worldwide today</TypographyP>
    </div>
  )
}

export default page