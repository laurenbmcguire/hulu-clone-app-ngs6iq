import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  color: #fff;
  display: flex;
  background: inherit;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    object-fit: contain;
    height: 80px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const HeaderIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  cursor: pointer;

  .MuiSvgIcon-root {
    font-size: 30px;
    margin: 0 auto;
  }

  p {
    display: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: small;
    margin: 0 auto;
  }

  &:hover p {
    display: inline-flex;
  }

  &.active p {
    display: inline-flex !important;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <HeaderIcon className="active">
          <HomeIcon />
          <p>Home</p>
        </HeaderIcon>
        <HeaderIcon>
          <FlashOnIcon />
          <p>Trending</p>
        </HeaderIcon>
        <HeaderIcon>
          <LiveTvIcon />
          <p>Verified</p>
        </HeaderIcon>
        <HeaderIcon>
          <VideoLibraryIcon />
          <p>Collections</p>
        </HeaderIcon>
        <HeaderIcon>
          <SearchIcon />
          <p>Search</p>
        </HeaderIcon>
        <HeaderIcon>
          <PersonOutlineIcon />
          <p>Account</p>
        </HeaderIcon>
      </HeaderIcons>

      <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680" alt="Hulu Logo" />
    </HeaderContainer>
  )
}

export default Header;