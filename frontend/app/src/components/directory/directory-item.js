import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minWidth: '30%',
    height: '240px',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '0 7.5px 15px',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
  
      '& .background-image': {
        transform: 'scale(1.1)',
        transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
      },
      '& .body': {
        opacity: 0.9,
      }
    },
  
    '&.large': {
      height: '380px',
    },
  
    '&:first-child': {
      marginRight: '7.5px',
    },
  
    '&:last-child': {
      marginLeft: '7.5px',
    },
  
    '& .background-image': {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    '& .body': {
      height: '90px',
      padding: '0 25px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      backgroundColor: 'white',
      opacity: 0.7,
      position: 'absolute',
  
      '& h2': {
        fontWeight: 'bold',
        margin: '0 6px 0',
        fontSize: '22px',
        color:'#4a4a4a',
      },
  
      '& p': {
        fontWeight: 'lighter',
        fontSize: '16px',
      }
    }
  },
});

const DirectoryItem = ({ category }) => {
  const classes = useStyles();
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className={classes.root} onClick={onNavigateHandler}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
