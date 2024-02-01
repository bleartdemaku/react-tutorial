import React from "react";

const Home = () => {
  const handleClick = (e) => {
    console.log("hello", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(name, e.target);
  };

  return (
    <div className="home">
      <h2>home page</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain("bleart", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
