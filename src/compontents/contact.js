import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';

const StyledForm = styled('form')({
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
});

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', password: '', date: '', phone: '' });
  const [errors, setErrors] = useState({ email: '', password: '', date: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number (should contain 10 digits)';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data
      console.log('Form data:', formData);
      // Clear the form data
      setFormData({ email: '', password: '', date: '', phone: '' });
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Form
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{
            endAdornment: <EmailIcon />,
          }}
        />
        <StyledTextField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password}
        />
        <StyledTextField
          type="date"
          name="date"
          placeholder="Select date"
          value={formData.date}
          onChange={handleChange}
          variant="outlined"
          error={!!errors.date}
          helperText={errors.date}
        />
        <StyledTextField
          label="Phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          variant="outlined"
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </StyledForm>
    </Container>
  );
};

export default Contact;
