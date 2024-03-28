import React from 'react'

const Hero = () => {
  return (
    <>
      
        <div className="bg-[url(/images/hero2.jpg)] md:h-[100vh] h-[75vh] bg-cover">

        <div className='max-w-[1340px] mx-auto h-[100%] flex pt-36 md:items-center md:pt-0 px-8'>

        <div className="text-white w-[650px]">
          <h2 className="md:text-[45px] text-3xl font-bold">Stay in the Loop</h2>
          <p className='py-10 text-[14px] md:text-base text-neutral-400'>
            Get the daily email from EasyPeasy that makes reading the news
            actually enjoyable. Join our mailing list to stay in the loop to
            stay informed, for free.
          </p>
          <div className='w-[]'>
            <input className='w-[60%] md:w-[65%] outline-none text-neutral-950 font-semibold border-none px-4 py-3 rounded-md rounded-e-none' type="email" placeholder='Your Email Address' />
            <button className='bg-green-500/90 border-none py-3 px-4 rounded-e-md'>Subscribe</button>
          </div>
        </div>
        </div>


        </div>
    
    </>
  );
}

export default Hero