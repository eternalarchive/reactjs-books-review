import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withAuth(Component, loggedin = true) {
  function WrappedComponent(props) {
    // const token = localStorage.getItem('token');
    const token = useSelector(state => state.auth.token);

    if (loggedin) {
      if (token === null) {
        return <Redirect to="/signin" />;
      }
    } else {
      if (token !== null) {
        return <Redirect to="/" />;
      }
    }
    return <Component {...props} />;
  }
  WrappedComponent.displayName = `withAuth(${Component.name})`;
  return WrappedComponent;
}

export default withAuth;
