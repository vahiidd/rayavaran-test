import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProfilePage from './components/Profile/ProfilePage';

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
