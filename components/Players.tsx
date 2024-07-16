"use client";

import React, { useState } from 'react'
import Player from './Player';

const Players = ({players}: any) => {


  return (
    <div className='w-full flex justify-center gap-0'>
        {
            players.map((v: any) => (
                <div className='w-[280px] min-h-screen border-x-[3px] border-zinc-800' key={v.header}>
                    <div className='w-full h-[80px] flex items-center justify-center bg-zinc-950/50'>
                        <strong className='text-2xl font-p'>{v.header}</strong>
                    </div>
                    <div className='w-full pt-4'>
                        {
                            v.players.map((v: any) => (
                                <div>
                                    <Player name={v.name} rank={v.rank} region={v.region} reason={v.reason}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Players
