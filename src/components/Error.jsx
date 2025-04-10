import React from "react";

const Error = () => {
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center rounded-b-md rounded-bl-md rounded-t-md rounded-tl-md bg-gray-300 py-2 px-8">
        <p className="text-red-600">
          Nenhum perfil foi encontrado com este nome de usuário.
        </p>
        <p className="text-red-600">Tente novamente</p>
      </div>
    </>
  );
};

export default Error;
