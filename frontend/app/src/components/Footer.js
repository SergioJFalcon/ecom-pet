import { Link } from 'react-router-dom';

import { 
    Box,
    Button,
    Grid,
    FormControl,
    InputBase,
    OutlinedInput
} from '@mui/material';

const Footer = () => {
    return (
        <footer>
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
                        <FormControl sx={{ width: '35ch' }}>
                            <OutlinedInput placeholder="Please enter your email" />
                        </FormControl>
                    </Box>
                    <Box sx={{ marginTop: '1rem'}}>
                        <Button variant="contained" color="primary">Sign Up</Button>
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
