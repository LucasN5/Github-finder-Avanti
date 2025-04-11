import React from "react";
import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative md:w-screen md:max-w-md min-[344px]:w-full"
      >
        <input
          type="text"
          placeholder="Digite o Nome de um Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-b-md rounded-bl-md rounded-t-md rounded-tl-md px-4 pr-12 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-b-md rounded-bl-md rounded-t-md rounded-tl-md absolute right-0.5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <img
            src="./../lupa_icon.svg"
            alt="Icone de uma lupa"
            className="w-10 h-10"
          />
        </button>
      </form>
    </>
  );
}

export default Search;
