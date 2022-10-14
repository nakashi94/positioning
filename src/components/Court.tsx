import { FC, memo } from "react";

import { Demo } from "./Demo";

export const Court: FC = memo(() => {
  return (
    <div>
      <div className="bg-gray-200 sm:px-48 px-8 h-screen pt-4">
        <div className='bg-lime-400 sm:h-3/4 h-4/6 border-4 border-white grid grid-rows-4 grid-cols-12'>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-8 row-span-1 border-4 border-white'></div>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-4 row-span-1 border-4 border-white'></div>
            <div className='col-span-2 row-span-2 border-4 border-white'></div>
            <div className='col-span-8 row-span-1 border-4 border-white'></div>
        </div>
      </div>
      <div className='absolute top-10 left-10'>
        <Demo />
      </div>
    </div>
  )
})
