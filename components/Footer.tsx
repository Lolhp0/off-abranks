import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='w-full h-fit px-8 bg-zinc-950 py-5 mt-5'>
      <div className='w-full flex items-center justify-center gap-1 flex-col'>
        <strong>&copy; ABRANKS</strong>

        <p className='text-sm'>Check out the team: <Link href="/team" className='underline underline-offset-2'>Go</Link></p>
      </div>
      <hr className='border-stone-600 my-4'/>
      <div>
        <p className='text-[13px] text-zinc-300'>This website is not affiliated with mojang, microsoft or adrenalin box.</p>
      </div>
    </section>
  )
}

export default Footer
