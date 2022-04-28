import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { 
    Alert,
    Box,
    Button,
    Grid,
    FormControl,
    InputBase,
    OutlinedInput,
    MuiAlert,
    Snackbar,
    Stack,
} from '@mui/material';

const Footer = () => {  
    const [openSuccess, setSuccessOpen] = useState(false);
    const [openError, setErrorOpen] = useState(false);
    const [subscribeEmail, setSubscribeEmail] = useState('');

    const handleChange = (event) => {
        setSubscribeEmail(event.target.value);
    }
    const handleClick = (e) => {
        emailjs.send("service_dqxu4te","template_nvgt7i7",{
            to_name: subscribeEmail,
        }, 'i6M3eW5vhCy3_uR5T').then((result) => {
            console.log(result.text);
            setSuccessOpen(true);
            setSubscribeEmail('');
        }, (error) => {
            console.log(error.text);
            setErrorOpen(true);
        });
        
    };

    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setSuccessOpen(false);
    };

    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setErrorOpen(false);
    };

    return (
        <footer>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                    {subscribeEmail} successfully subscribed!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
                    Error subscribing {subscribeEmail}. Please try again.
                </Alert>
            </Snackbar>
            <Grid container sx={{ display: 'flex', flexWrap: 'nowrap'}}>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <span>
                        Join your Pet's World<br />
                        Sign up for emails about the latest <br />
                        deals, products, and more!
                    </span>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl  sx={{ width: '35ch' }}>
                            <OutlinedInput type="email" placeholder="Please enter your email" onChange={handleChange}  value={subscribeEmail} />
                        </FormControl>
                    </Box>
                    <Box sx={{ marginTop: '1rem'}}>
                        <Button variant="contained" color="primary" onClick={handleClick}>Sign Up</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Link to='/faqs'>FAQS</Link> | <Link to='/contact'>Contact Us</Link>
                </Grid>
            </Grid>
        </footer>
    )
};

export default Footer;
