import React from 'react'

const Loading = () => {
  return (
    <div
  className="inline-block h-[15px] w-[15px] ms-2 border-gray-500 animate-spin rounded-full border-[3px]  border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
 >
  <span
    className="!absolute  !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
  )
}

export default Loading
