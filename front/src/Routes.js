import React from "react";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import { Switch, Redirect, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewPost />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
