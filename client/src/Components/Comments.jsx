import React from 'react'

const Comments = () => {
  return (
    <div className="border mb-4 text-neutral-400 border-neutral-500 rounded-xl p-5 md:p-8">
      <h2>Leave a Reply</h2>
      <p className="pb-6 pt-1 text-[15px] md:text-base">
        Your Email address will not be published. The Required fields are marked
        *
      </p>
      <div className=" flex flex-col">
        <label className="flex flex-col pb-5" htmlFor="comment">
          <span className="font-semibold">Comment * </span>
          <textarea
            className="bg-transparent mt-2 rounded-md border border-neutral-500 outline-none p-3"
            name=""
            placeholder="Abobi talk your mind now..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label className="flex pb-5 flex-col" htmlFor="name">
          <span className="font-semibold">Name * </span>
          <input
            className="outline-none mt-2 border border-neutral-500 rounded-md p-3 bg-transparent"
            type="text"
            name="name"
            id=""
            placeholder="What's your name Abobi... "
          />
        </label>
        <label className="flex pb-8 flex-col" htmlFor="email">
          <span className="font-semibold">E-mail </span>
          <input
            className="outline-none mt-2 border border-neutral-500 rounded-md p-3 bg-transparent"
            type="email"
            name="email"
            id=""
            placeholder="Abobi please put your E-mail... "
          />
        </label>
      </div>
      <button className="bg-green-500/90 uppercase rounded-lg py-2 px-4 font-semibold transition duration-500 hover:bg-green-500/60 text-white">
        Post Comment
      </button>
    </div>
  );
}

export default Comments
