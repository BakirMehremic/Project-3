import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  marginBottom: '20px',
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Title variant="h6">
          React App
        </Title>
        <div>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/addpost" color="inherit">Add Post</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
