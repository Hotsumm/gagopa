import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UploadPicture from './routes/UploadPicture';
import City from './routes/City';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Login from './routes/Login';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" exact component={UploadPicture} />
          <Route path="/city/:cityName" exact component={City} />
          <Route path="/city/:cityName/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
