import React from 'react';
import { Redirect } from 'react-router-dom';
import { NotFound, Home } from 'components/pages';

import InitPage from 'components/initPage';
export default [
  {
    path: '/',
    component: () => (
      <InitPage>
        <Home />
      </InitPage>
    )
  },

  {
    path: '/notFound',
    component: () => (
      <InitPage>
        <NotFound />
      </InitPage>
    )
  },
  {
    component: () => <Redirect to="/notFound" />
  }
];
