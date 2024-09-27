import Link from 'next/link';
import React from 'react'

interface NavbarProps {

}
export const Navbar: React.FC<NavbarProps> = () => {
  const NAVIGATION = ['Portfolio', 'blog', 'course'];
  return(
    <header className='w-full h-20 bg-[rgb(var(--background))] fixed top-0 px-[25%] flex justify-between items-center z-50'>
      <h1 className='text-[rgb(var(--primary))] text-4xl'>BNK4970</h1>
      <ul className='flex gap-4'>
        {NAVIGATION.map((nav, idx)=>(
          <Link href={`/${nav}`} key={idx} className='text-foreground hover:text-[rgb(var(--primary))] duration-200 capitalize'>{nav}</Link>
        ))}
      </ul>
    </header>
  )
}
export default Navbar;