import React from "react";
import Navbar from "./Navbar";

import Add from "./Homepage/Add";
import Post from "./Homepage/Post";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Add />
      <Post />
    </div>
  );
};

export default Home;
