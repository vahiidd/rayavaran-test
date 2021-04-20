import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile/:username' component={ProfilePage} />
        <Route exact path='/404' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
