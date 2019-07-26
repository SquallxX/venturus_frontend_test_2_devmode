import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import UserTable from './components/UserTable';
import Form from './components/Form';
import ErrorPath from './components/ErrorPath';


function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/users" exact component={UserTable}/>
      <Route path="/users/new" exact component={Form}/>
      <Route path="*" component={ErrorPath}/>
    </Switch>
  );
}

export default Routes
