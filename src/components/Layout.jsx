import React from 'react';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import { StyledDiv } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <StyledDiv>{children}</StyledDiv>
      <Footer />
    </>
  );
};

export default Layout;
