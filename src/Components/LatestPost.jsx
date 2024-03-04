import React from 'react'

const LatestPost = () => {
  return (
    <div>
      <div className=" rounded-2xl  ">
        <div className="">
          <img className=" rounded-t-2xl " src="/images/hero2.jpg" alt="" />
        </div>
        <div className="border rounded-b-2xl p-8 py-10 border-t-0 border-neutral-600">
          <h2 className="text-green-500/90 font-semibold uppercase text-[12px]">
            Easy
          </h2>
          <p className="py-2 lg:text-xl md:text-base text-xl font-bold">
            Crypto Comedians Question Queen’s Bitcoin Interest
          </p>
          <p className="uppercase text-[14px] text-neutral-500">Easy Peasy</p>
        </div>
      </div>
    </div>
  );
}

export default LatestPost
