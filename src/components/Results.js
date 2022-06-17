import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import VideoCard from './VideoCard';
import axios from './axios';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  .flip {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <ResultsContainer>
      <FlipMove className="flip">
        {movies.map(movie => {
        return <VideoCard key={movie.id} movie={movie}/>
      })}
      </FlipMove>
    </ResultsContainer>
  )
};

export default Results;