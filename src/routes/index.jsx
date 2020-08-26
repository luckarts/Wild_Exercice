import React from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  const routeComponents = routes.map(({ path, component }, id) => (
    <Route exact={id === 0 ? true : false} path={path} component={component} key={id} />
  ));

  return <Switch>{routeComponents}</Switch>;
};

export default Routes;
