import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
  return (
    <div className='w-full min-h-screen flex items-center pt-12 flex-col text-center'>
            <p>This Page Is Coming Soon.
                <style jsx>
                    {`
                        p {
                            font-size: 3.2rem;
                            font-family: var(--font-poppins);
                            margin-bottom: 1rem;
                        }
                    `}
                </style>
            </p>
            <strong>We are currently working on this page.
                <style jsx>
                        {`
                            strong {font-size: 1.4rem;}
                        `}
                </style>
            </strong>
            <Link href="/" className='w-fit h-12 bg-blue-800 pt-2.5 px-5 mt-12 text-xl'>
                Return To Home Page
            </Link>
    </div>
  )
}

export default ComingSoon
