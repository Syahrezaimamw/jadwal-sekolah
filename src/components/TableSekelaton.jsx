import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const TableSekelaton = () => {
  return (
    <div className='w-full'>
       
        <Skeleton count={11} className='h-[40px] mt-2' />
    </div>
  )
}
