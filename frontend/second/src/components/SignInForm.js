import { useState } from 'react';

import { Button, TextField } from '@mui/material';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container" style={{ display: 'flex', flexDirection: 'column', width: '380px'}}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="filled-basic" 
          label="Email" 
          variant="filled"
          type="email"
          onChange={handleChange}
          name='email'
          value={email}
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
          sx={{
            marginBottom: '2rem'
          }}
        />
        <div 
          className='buttons-container' 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between'
          }}>
          <Button
            variant="outlined"
            type='submit'
          >
            Sign In
          </Button>
          <Button
            type='button'
            variant="contained"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
