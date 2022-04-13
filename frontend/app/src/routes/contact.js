import { Fragment, useState } from 'react';
import { Button, FormControl, FormControlLabel, FormGroup, TextField} from '@mui/material';

const ContactUs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    comment: '',
  })

  const handleSubmit = () => {
    alert(`Sending Pet's world your comment/question. `)
  } 
  
  return (
    <Fragment>
      <h2>Contact Us</h2>
      <p>Is your question not answered in the FAQs? No problem! Contact us here and we will help you out as soon as we can!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-contained">
        <div className="form-input" style={{ display: 'flex', flexDirection: 'column' }}>
          <FormGroup sx={{ marginBottom: '2rem'}}>
            <FormControlLabel 
              control={
                <TextField 
                  id="user-name-input" 
                  label="Name" 
                  variant="outlined" 
                  onChange={(e) => {
                    e.persist();
                    setUser((prev) => ({
                      ...prev,
                      name: e.target.value
                    }));
                  }}
                  sx={{ 
                    width: '25ch',
                    marginLeft: '1rem',
                  }}
                />
              }
              label="Name"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup sx={{ marginBottom: '2rem'}}>
            <FormControlLabel 
              control={
                <TextField 
                  id="user-email-input" 
                  label="Email" 
                  variant="outlined" 
                  onChange={(e) => {
                    e.persist();
                    setUser((prev) => ({
                      ...prev,
                      email: e.target.value
                    }));
                  }}
                  sx={{ 
                    width: '25ch',
                    marginLeft: '1rem',
                  }}
                />
              }
              label="Email"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel 
              control={
                <TextField 
                  id="user-comment-input" 
                  label="Comment" 
                  variant="outlined" 
                  onChange={(e) => {
                    e.persist();
                    setUser((prev) => ({
                      ...prev,
                      comment: e.target.value
                    }));
                  }}
                  sx={{ 
                    width: '25ch',
                    marginLeft: '1rem',
                  }}
                />
              }
              label="Comment"
              labelPlacement="start"
            />
          </FormGroup>
        </div>
        <div className="submit-btn" style={{ width: '100%', alignItems: 'center' }}>
          
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{ 
              textAlign: 'center',
              margin: '5rem',
            }}
          >
            Reach out!
          </Button>
        
        </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactUs;
