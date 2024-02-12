import React from 'react'

const Background = () => {
  return (
   <>
   <div className='fixed w-full h-full z-[2] '>
   <div className="absolute flex top-[5%] w-full py-10  justify-center text-zinc-600 text-xl font-semibold ">Documents.</div>
        <h1 className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold text-zinc-900 text-[14vw] leading-none	tracking-tighter">
          Docs.
        </h1>
   </div>
    
   </>
  )
}

export default Background