import React from "react";

function User({ user }) {
  return (
    <>
      <div className="transition-all duration-500 ease-in-out transform hover:scale-105 flex flex-row justify-start items-center gap-5 rounded-b-3xl rounded-bl-3xl rounded-t-3xl rounded-tl-3xl bg-neutral-300 p-5 w-full min-[344px]:flex-col md:flex-row ">
        <div className="w-1/3">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-48 h-48 border-2 border-blue-500 rounded-full mx-auto "
          />
        </div>
        <div className="flex flex-col gap-3 overflow-hidden w-2/3">
          <h2 className="text-3xl font-bold text-blue-500">{user.name}</h2>
          <p className="font-[Roboto] text-wrap ">
            {user.bio || "Este usuário não tem uma bio"}
          </p>
        </div>
      </div>
    </>
  );
}

export default User;
