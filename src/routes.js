import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/create-post" exact component={CreatePost} />
        <Route path="/post/:id" exact component={Post} />
      </Switch>
    </BrowserRouter>
  );
}