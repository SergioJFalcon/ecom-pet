import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
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

const StripeCheckoutButton = ({ price }) => {
    //stripe wants everything in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IPiscGAFmE4RNQq7i0MFDHXJkYfIwh5fRQUCtr77ohdqRXIT0W66WeNkWeSruz0nfh1XN9EBADLblOeF2VCUSHM00nVlWtgDP';
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };
    const onToken = token => {
        console.log(token);
        setOpen(true);
    }

    return (
        <div>
            <Snackbar open={open} anchorOrigin={{vertical: 'top', horizontal: 'right'}} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Payment successful!
                </Alert>
            </Snackbar>
            <StripeCheckout 
                label='Pay now'
                name="Pet's World"
                billingAddress
                shippingAddress
                image='https://www.svgrepo.com/show/29317/pets.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
};

export default StripeCheckoutButton;