import React from "react";
import TitleList from "./TitleList";

const Home = () => {
  return (
    <main className="container">
      <h4>
        Welcome to <b>Microblog</b>, our innovative site for communicating on
        the information superhighway.
      </h4>
      <TitleList />
    </main>
  );
};

export default Home;
