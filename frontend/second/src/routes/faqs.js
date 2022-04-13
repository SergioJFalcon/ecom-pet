import { Fragment } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  return (
    <Fragment>
      <div style={{ marginBottom: '5rem'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Does Pet's World sell pets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, Pet's World is only in the business of pet apparel and products. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Does Pet's World offer grooming services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are in the process of expanding our website to handle our in-person grooming services. 
            Please check back at a later date for that feature to be fully implemented. Sorry for the inconvenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Does Pet's World offer free shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TBD.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Fragment>
  );
};

export default FAQs;
