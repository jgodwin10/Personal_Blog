import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      alert(error);
    }
      setEmail("")
      setPassword("")
      setUsername("")
  };

  return (
    <div className="text-white pt-40 pb-24 max-w-[1440px] px-4 md:px-8 mx-auto">
      <div className="lg:w-[50%] md:w-[70%] w-[90%] mx-auto px-8 py-8 border border-neutral-600 rounded-lg shadow-2xl">
        <h2 className="text-green-500/90 ">Register!</h2>

        <div className="flex px-4 flex-col py-5 justify-between">
          <label className="flex flex-col pb-7" htmlFor="name">
            <span className="py-2 text-[20px] font-semibold text-neutral-400">
              Username
            </span>
            <input
              className="bg-transparent outline-none text-neutral-400 "
              type="text"
              placeholder="Your Username egbon..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <hr className="text-neutral-600" />
          <label className="flex flex-col pt-4 pb-7" htmlFor="email">
            <span className="py-2 text-[20px] font-semibold text-neutral-400">
              E-mail
            </span>
            <input
              className="bg-transparent text-neutral-400 outline-none"
              type="email"
              name=""
              placeholder="Abobi what's your E-mail?"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <hr className="text-neutral-600" />
          <label className="flex flex-col pt-4" htmlFor="password">
            <span className="py-2 text-[20px] font-semibold text-neutral-400">
              Password
            </span>
            <input
              className="bg-transparent text-neutral-400 outline-none"
              type="password"
              name=""
              placeholder="Abobi what's your password?"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-[20px] font-semibold hover:bg-green-500/90 rounded-lg w-[30%] mx-auto py-2 shadow-lg mt-20"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
