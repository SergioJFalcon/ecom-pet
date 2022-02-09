import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <footer>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center'}}>
                    Copyright &copy;
                </Grid>
            </Grid>
        </footer>
    )
};

export default Footer;
