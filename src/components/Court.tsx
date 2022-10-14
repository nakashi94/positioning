import { FC, memo } from "react";
import { Demo } from "./Demo";

export const Court: FC = memo(() => {
  return (
    <div className="bg-red-500 sm:px-48 px-8 h-screen" >
      <div className='bg-lime-400 sm:h-3/4 h-4/6'>
        <div className='w-max mx-auto'></div>
        <Demo />
      </div>
    </div>
  )
})
