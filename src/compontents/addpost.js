import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  marginTop: '20px',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});

const Addpost = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPostHandler = (e) => {
    e.preventDefault();
    if (title === '' || content === '') {
      alert('Fill all fields');
      return;
    }
    props.addPostHandler({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add Blog Post
      </Typography>
      <StyledForm onSubmit={addPostHandler}>
        <StyledTextField
          label="Title"
          name="title"
          placeholder="Enter the post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <StyledTextField
          label="Content"
          name="content"
          placeholder="Enter the post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Post
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default Addpost;
