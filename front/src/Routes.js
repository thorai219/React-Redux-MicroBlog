import React from "react";
import Blog from "./components/Blog";
import NewPostForm from "./components/NewPostForm";
import Post from "./components/Post";
import { Switch, Redirect, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Blog />
      </Route>
      <Route exact path="/new">
        <NewPostForm />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
