import { connect } from 'react-redux';
import SigninForm from '../components/SigninForm';
import {
  setToken,
  startLoading,
  endLoading,
  userError,
  passwordError,
  loginError,
} from '../actions';
import axios from 'axios';

export default connect(
  state => ({
    loading: state.loading,
    errorName: state.errorName,
  }),
  dispatch => ({
    login: async (email, password) => {
      try {
        dispatch(startLoading());
        const response = await axios.post('https://api.marktube.tv/v1/me', {
          email,
          password,
        });
        console.log(response.data);
        const { token } = response.data;
        dispatch(endLoading());
        localStorage.setItem('token', token);
        dispatch(setToken(token));
      } catch (error) {
        console.log(error);
        dispatch(endLoading());
        if (error.response.data.error === 'USER_NOT_EXIST') {
          dispatch(userError());
        } else if (error.response.data.error === 'PASSWORD_NOT_MATCH') {
          dispatch(passwordError());
        } else {
          dispatch(loginError());
        }
        throw error;
      }
    },
  }),
)(SigninForm);
