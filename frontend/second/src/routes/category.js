import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ProductCard from '../components/category/product-card';
import { CategoriesContext } from '../contexts/categories.context';;

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [foodProducts, setFoodProducts] = useState([]);
  const [treatsProducts, setTreatsProducts] = useState([]);
  const [toysProducts, setToysProducts] = useState([]);
  const [bedsProducts, setBedsProducts] = useState([]);
  const [bowlAndFeederProducts, setBowlAndFeederProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  useEffect(() => {
    if(categoriesMap !== undefined && Object.keys(categoriesMap).length !== 0 && products !== undefined) {
      setFoodProducts(products.filter((item) => item.name.includes('food') || item.tags.includes('food')));
      setTreatsProducts(products.filter((item) => item.name.includes('treat') || item.tags.includes('treat')));
      setToysProducts(products.filter((item) => item.name.includes('toy') || item.tags.includes('toy')));
      setBedsProducts(products.filter((item) => item.name.includes('bed') || item.tags.includes('bed')));
      setBowlAndFeederProducts(products.filter((item) => item.name.includes('bowl') || item.name.includes('feeder') || item.tags.includes('bowl') || item.tags.includes('feeder')));
    }
  }, [products, categoriesMap]);

  const captilizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  return (
    <Fragment>
      <h2 
        className='category-title'
        style={{ 
          fontSize: '38px',
          marginBottom: '25px',
          textAlign: 'center'
        }}
      >
        {category !== 'small_pets' ? captilizeFirstLetter(category) : captilizeFirstLetter('Small Pets')}'s World
      </h2>
      <Grid sx={{ margin: '2rem' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div 
            className='category-container'
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '20px',
              rowGap: '50px',
            }}
          >
            {foodProducts &&
              foodProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Treats</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div 
            className='category-container'
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '20px',
              rowGap: '50px',
            }}
          >
            {treatsProducts &&
              treatsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Toys</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div 
            className='category-container'
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '20px',
              rowGap: '50px',
            }}
          >
            {toysProducts &&
              toysProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Beds</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div 
            className='category-container'
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '20px',
              rowGap: '50px',
            }}
          >
            {bedsProducts &&
              bedsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Bowl & Feeder</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div 
            className='category-container'
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '20px',
              rowGap: '50px',
            }}
          >
            {bowlAndFeederProducts &&
              bowlAndFeederProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      </Grid>
    </Fragment>
  );
};

export default Category;
