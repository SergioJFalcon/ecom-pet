import { useContext, useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Button, Chip, Grid, Typography, Stack } from '@mui/material';

import ProductCard from '../components/category/product-card';

import { CategoriesContext } from '../contexts/categories.context';
import { CartContext } from '../contexts/cart.context';
import { UserContext } from '../contexts/user.context';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
    root: {
      width: '100%',
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
  console.log('currentUser', currentUser);
  return (
    <Fragment>
      <div className={classes.root}>
      <Accordion sx={{ width: '80%', }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2
            className='category-title'
            style={{
            textAlign: 'center'
            }}
          >
            My Pet's World Account
          </h2>
          
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={6}>
              <h2>Name: </h2>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" sx={{ marginLeft: '0.5rem', float: 'right' }}>Edit</Button>
              <Button variant="contained" color="primary" sx={{ float: 'right' }}>View Order History</Button>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={6}>
                <h3>Email: [email]</h3>
              </Grid>
              <Grid item xs={6}>
              <h3>Password: [enter new password]</h3>
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ float: 'right' }}>
              <Button variant="contained" color="primary" sx={{ marginLeft: '0.5rem', float: 'right' }}>Cancel</Button>
              <Button variant="contained" color="primary" sx={{ float: 'right' }}>Save</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: '80%', }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2
            className='category-title'
            style={{
            textAlign: 'center'
            }}
          >
            Pets
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.payments}>
            <div className="add-pet">
              + Add a Pet
            </div>
            <h3>Payment/Billing Methods</h3>
            <div className="add-payment">
              + Add a Payment/Billing Method
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      </div>        
    </Fragment>
  );
};

export default Profile;
