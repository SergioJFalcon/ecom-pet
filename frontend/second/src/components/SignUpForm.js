import { useState } from 'react';

import { Button, TextField } from '@mui/material';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div 
      className='sign-up-container' 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '380px',
      }}
    >
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="filled-basic" 
          label="Display Name" 
          variant="filled"
          type="text"
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
          sx={{
            marginTop: '2rem'
          }}
        />
        <TextField 
          id="filled-basic" 
          label="Email" 
          variant="filled"
          type="email"
          onChange={handleChange}
          name='email'
          value={email}
          required
          sx={{
            marginTop: '2rem'
          }}
        />
        <TextField 
          id="filled-basic" 
          label="Password" 
          variant="filled"
          type="password"
          onChange={handleChange}
          name='password'
          value={password}
          required
          sx={{
            marginBottom: '2rem'
          }}
        />
        <TextField 
          id="filled-basic" 
          label="Confirm Password" 
          variant="filled"
          type="password"
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
          sx={{
            marginBottom: '2rem'
          }}
        />
        <Button 
          variant="outlined"
          type='submit'
          sx={{
            display: 'flex',
            fontSize: '15px',
            backgroundColor: '#4285f4',
            color: 'white',
            '&:hover': {
              backgroundColor: '#357ae8',
              border: 'none',
            }
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
