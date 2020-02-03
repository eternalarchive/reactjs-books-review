import { connect } from 'react-redux';
import SigninForm from '../components/SigninForm';
import { setToken, startLoading, endLoading } from '../actions';
import axios from 'axios';

export default connect(
  state => ({
    loading: state.loading,
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
        throw error;
      }
    },
  }),
)(SigninForm);
