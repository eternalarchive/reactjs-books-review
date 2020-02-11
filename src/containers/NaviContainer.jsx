import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navi from '../components/Navi';
import { startLogoutSaga } from '../redux/modules/auth';

const NaviContainer = props => {
  const token = useSelector(state => state.auth.token);
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    console.log('123');
    dispatch(startLogoutSaga());
  }, [dispatch]);

  return (
    <Navi
      {...props}
      token={token}
      loading={loading}
      error={error}
      logout={logout}
    />
  );
};

export default NaviContainer;
