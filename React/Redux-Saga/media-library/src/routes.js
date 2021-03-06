import React from 'react'; 
import { Route } from 'react-router-dom';
import App from './containers/App';
import HomePage from './components/HomePage';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Route path="/" component={App}> 
    <Route component={HomePage} />
  </Route>
);