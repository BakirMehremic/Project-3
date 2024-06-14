import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPost = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
});

const StyledHeader = styled(Typography)({
  marginBottom: '10px',
});

const StyledContent = styled(Typography)({
  marginBottom: '10px',
});

const DeleteButton = styled(Button)({
  marginLeft: '10px',
});

const Postslist = (props) => {
  const deletePostHandler = (id) => {
    props.removePostHandler(id);
  };

  const renderPosts = props.posts.map((post) => {
    return (
      <StyledPost key={post.id}>
        <div className='content'>
          <StyledHeader variant="h6">{post.title}</StyledHeader>
          <StyledContent>{post.content}</StyledContent>
          <DeleteButton variant="contained" color="error" onClick={() => deletePostHandler(post.id)}>
            Delete
          </DeleteButton>
        </div>
      </StyledPost>
    );
  });

  return (
    <div>
      {renderPosts}
    </div>
  );
};

export default Postslist;
