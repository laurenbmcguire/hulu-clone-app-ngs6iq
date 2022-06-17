import React, { forwardRef } from 'react';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const VideoCardContainer = styled.div`
  color: #fff;
  width: 500px;
  height: 400px;
  padding: 20px;
  transition: transform 100ms;

  img {
    height: 300px;
    object-fit: contain;
    width: 500px;
  }

  &:hover {
    transform: scale(1.09);
  }

  h2 {
    padding-top: 10px;
  }

  .videoCard_stats {
    display: none;
  }

  &:hover .videoCard_stats {
    display: inline;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 100%;
    }
  }
`;

const VideoCard = forwardRef(({ movie }, ref) => {
  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
    <VideoCardContainer ref={ref}>
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard_stats">
        {movie.media_type && `${movie.media_type} *`}
        {movie.release_date || movie.air_date} *
        <ThumbUpAltIcon />
        {movie.vote_count}
      </p>
    </VideoCardContainer>
  );
});

export default VideoCard;
