import React from 'react';
import Button from '@mui/material/Button';

// import Product from "../components/Product";
// import products from '../products';

const HomePage = () => {
    return (
        <div>
            <h1>Lastest Products</h1>
            <Button variant="contained" color="warning">New Button</Button>
            {/* <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row> */}
        </div>
    );
};
export default HomePage;