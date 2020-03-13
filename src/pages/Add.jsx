import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import useToken from '../hooks/useToken';
import BookAddContainer from '../containers/BookAddContainer';

const Add = () => {
  const token = useToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return (
    <Layout>
      <BookAddContainer />
    </Layout>
  );
};

export default Add;
