import "./App.css";
import Error from "./components/Error.jsx";
import Loading from "./components/Loading.jsx";
import Search from "./components/Search.jsx";
import User from "./components/user.jsx";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadUser = async (userName) => {
    setLoading(true);

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (response.status === 404) {
      setError(true);
      setUserData(null);
      setLoading(false);
      return;
    }

    setError(false);
    setUserData(data);
    setLoading(false);
  };

  return (
    <>
      <div className="h-screen bg-[#141c2f] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-stone-900 w-2/3 h-2/3 gap-8">
          <div className="flex flex-row-reverse gap-2 justify-center">
            <h1 className="text-6xl text-white">
              Perfil{" "}
              <span className="font-[Roboto] font-extrabold text">GitHub</span>
            </h1>
            <img
              src="./github_icon.svg"
              alt="icone do github"
              className="w-16 h-16"
            />
          </div>
          <div>
            <Search onSearch={loadUser} />
          </div>
          <div className="px-5">
            {loading && <Loading />}
            {error && !loading && <Error />}
            {userData && !loading && <User user={userData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
