import { useContext, useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Button, Chip, Stack } from '@mui/material';

import ProductCard from '../components/category/product-card';

import { CategoriesContext } from '../contexts/categories.context';
import { CartContext } from '../contexts/cart.context';
import { UserContext } from '../contexts/user.context';

const useStyles = makeStyles({
    root: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginBottom: '5rem',
      marginLeft: '5rem',
      '& img': {
        width: '50%',
        height: '95%',
        objectFit: 'cover',
        marginBottom: '5px',
      },
      '& .user-row': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      },
    },
    
    pets: {
      marginLeft: '5rem',
      marginBottom: '5rem',
    },
    payments: {
      marginLeft: '5rem',
      marginBottom: '5rem',
    },
});

const Profile = () => {
  const classes = useStyles();
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className={classes.root}>
        <h2 
          className='category-title'
          style={{ 
          fontSize: '38px',
          marginBottom: '25px',
          textAlign: 'center'
          }}
        >
          Profile
        </h2>
        <Button variant="contained" color="primary">View Order History</Button>
        <Button variant="contained" color="primary">Edit</Button>
        <Button variant="contained" color="primary">Save</Button>
        <Button variant="contained" color="primary">Cancel</Button>
        <div className="user-row">
          <img src={currentUser.photoUrl} alt={`${currentUser.displayName}`} />
          <div className="user-info">
            <div className="user-name">
              <h3>{currentUser.displayName}</h3>
            </div>
            <div className="user-email">
              <h3>Email: {currentUser.email}</h3>
            </div>
            <div className="user-number">
              <h3>Phone number: {currentUser.phoneNumber}</h3>
            </div>
            <div className="user-number">
              <h3>Password: enter new password</h3>
            </div>
          </div>
        </div>
        
      </div>
      <div className={classes.pets}>
        
          <h3>Pets</h3>
          <div className="add-pet">
            + Add a Pet
          </div>
        </div>
        <div className={classes.payments}>
          <h3>Payment/Billing Methods</h3>
          <div className="add-payment">
            + Add a Payment/Billing Method
          </div>
        </div>
    </Fragment>
  );
};

export default Profile;
