import React from "react";
import "./index.css";
import SearchMovies from "./components/SearchMovies";

const App = () => {
  return (
    <div className="justify-items-center align-center">
      <h1 className="text-5xl font-bold text-center mb-2 text-red-400 p-10">
        React Movie Search
      </h1>
      <SearchMovies />
    </div>
  );
};

export default App;
