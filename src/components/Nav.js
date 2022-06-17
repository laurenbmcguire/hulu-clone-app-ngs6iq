import React from 'react';
import requests from './requests';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  color: #fff;
  overflow-x: scroll;
  ms-overflow-style: none;
  scrollbar-width: none;
  padding: 10px;
  padding-left: 40px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    cursor: pointer;
    margin: 0 30px;
    font-weight: 500;
    opacity: 0.7;
    transition: transform 50ms ease-in;
  }

  h2:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Nav = ({ setSelectedOption }) => {
  return (
    <NavContainer>
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>TV</h2>
    </NavContainer>
  )
}

export default Nav;