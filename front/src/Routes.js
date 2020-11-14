import React from "react";
import Blog from "./components/Blog";
import NewPostForm from "./components/NewPostForm";
import ShowPost from "./components/ShowPost";
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
      <Route exact path="/id">
        <ShowPost />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
