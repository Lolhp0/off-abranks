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
      <div className='w-full h-fit flex items-center gap-2'>
        <p className='text-[13px] text-zinc-300'>This website is not affiliated with mojang, microsoft or adrenalin box.</p>
        <span className='text-[13px] text-zinc-300 border-l-2 border-zinc-300/40 pl-2'>Website Designed & Created By <strong className='font-extrabold'>LolHP</strong>.</span>
        <span className='text-[13px] text-zinc-300 border-l-2 border-zinc-300/40 pl-2'>AdrenalinBox Discord: <Link href="/"  className='font-extrabold underline underline-offset-2'>discord.gg/adrenalinbox</Link>.</span>
      </div>
    </section>
  )
}

export default Footer
