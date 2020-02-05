import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withAuth(Component) {
  function WrappedComponent(props) {
    // const token = localStorage.getItem('token');
    const token = useSelector(state => state.token);

    if (token === null) {
      return <Redirect to="/signin" />;
    }
    return <Component {...props} token={token} />;
  }
  WrappedComponent.displayName = `withAuth(${Component.name})`;
  return WrappedComponent;
}

export default withAuth;
