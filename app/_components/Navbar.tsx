import { TypographyH2 } from '@/components/typography/TypographyH2'
import { TypographyP } from '@/components/typography/TypographyP'
import React from 'react'

function Navbar() {
  return (
    <div className='border-b-[.5px] border-stone-300'>
        <TypographyH2>Hello, John Cena!</TypographyH2>
        <TypographyP>Welcome back to your dashboard. Here you can manage your blogs, view analytics, and customize your profile.</TypographyP>
    </div>
  )
}

export default Navbar