import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 30px;
  background: #000;

  img {
    width: 250px;
  }
`;  

const FooterContent = styled.div`
  margin: 20px;
  text-align: center;

  p {
    margin-bottom: 24px;
    font-size: 18px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Powered by</p>
        <a href="https://www.themoviedb.org/" target="_blank"><img  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDb Logo"/></a>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer;