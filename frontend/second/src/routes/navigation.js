import { Fragment, useContext, useState,  } from 'react';
import { Link, Route, Routes, Outlet, useSearchParams, useNavigate } from 'react-router-dom';

import CartIcon from '../components/cart/cart-icon';
import CartDropdown from '../components/cart/cart-dropdown';

import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart.context';

import { signOutUser } from '../utils/firebase/firebase.utils';

import Footer from '../components/Footer';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const pages = ['Shop', 'Pricing', 'Blog'];
const settings = ['Profile',];
const petItems = ['Food', 'Treats', 'Toys', 'Bed', 'Bowl & Feeder']

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElSideNav, setAnchorElSideNav] = useState(false);
  let [searchText, setSearchText] = useState(null);
  
  const [anchorElDog, setAnchorElDog] = useState(null);
  const [anchorElCat, setAnchorElCat] = useState(null);
  const [anchorElFish, setAnchorElFish] = useState(null);
  const [anchorElSmallPet, setAnchorElSmallPet] = useState(null);
  const [anchorElBird, setAnchorElBird] = useState(null);
  const [anchorElReptile, setAnchorElReptile] = useState(null);

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate('/search');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSideNav = (event) => {
    setAnchorElSideNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSideNav = () => {
    setAnchorElSideNav(false);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleCloseSideNav}
      onKeyDown={handleCloseSideNav}
    >
      <List>
        <Link to='/shop/dogs' >
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={'Dogs'} />
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link to='/shop/cats' >
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={'Cats'} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to='/shop/fish' >
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={'Fish'} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to='/shop/small_pets' >
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={'Small Pets'} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
      <Link to='/shop/birds' >
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={'Birds'} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to='/shop/reptiles' >
          <ListItem button>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={'Reptiles'} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) return;
    navigate({
      pathname: '/search',
      search: `?search=${searchText}`,
    });
  }

  return (
    <Fragment>
      <div className="navigation-container" style={{ height: '160px', width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            
            <Drawer
              anchor='left'
              open={anchorElSideNav}
              onClose={handleCloseSideNav}
            >
              {list()}
            </Drawer>
            {/** Hamburger menu for smaller dimensions */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link to={`/${page.toLowerCase()}`} >
                    <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
              
            </Box>
            <Grid sx={{alignItems: 'center', width: '100%'}}>
            <Link to='/'>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                Pet's World
              </Typography>
            </Link>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Link to='/' >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize: '2.5rem' }}
                >
                  Pet's World
              </Typography>
            </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <form onSubmit={handleSubmit} style={{width: "50rem"}}>
                <Search sx={{marginRight: '2rem', width: '20rem'}}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    type="text" 
                    name="searchText"
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSearchText} 
                  />
                </Search>
              </form>
            </Box>
            </Grid>


            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box sx={{ flexGrow: 0, marginRight: '0.75rem'}}>
                {currentUser ? (
                <div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Link to={`/${setting.toLowerCase()}`} >
                        <Typography textAlign="center">{setting}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={signOutUser}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
                ) : (
                  <Grid>
                    <Button variant="contained" sx={{ marginBottom: '1rem' }}><Link to='/auth' style={{ color: 'white' }}>Sign in</Link></Button>
                    <Button variant="contained"><Link to='/auth' style={{ color: 'white' }}>Create Account</Link></Button>
                  </Grid>
                )}
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ flexGrow: 0, marginLeft: '2rem' }}> 
                {/* <ShoppingCartIcon sx={{ color: 'black', fontSize: '72px' }} /> */}
                <CartIcon />
                {isCartOpen && <CartDropdown />}
              </Box>
            </Box>

          </Toolbar>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElDog}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElDog)}
                onClose={() => setAnchorElDog(null)}
              >
                {petItems.map((setting) => (
                  <Link to={`/shop/dogs/${setting.toLowerCase()}`} >
                    <MenuItem key={setting} onClick={() => setAnchorElDog(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box onClick={(event) => setAnchorElDog(event.currentTarget)}>Dogs</Box>
            </Box>
            <Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElCat}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElCat)}
                onClose={() => setAnchorElCat(null)}
              >
                {petItems.map((setting) => (
                  <Link to={`/shop/cats/${setting.toLowerCase()}`} >
                    <MenuItem key={setting} onClick={() => setAnchorElCat(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box onClick={(event) => setAnchorElCat(event.currentTarget)}>Cats</Box>
            </Box>
            <Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElFish}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElFish)}
                onClose={() => setAnchorElFish(null)}
              >
                {petItems.map((setting) => (
                  <Link to={`/shop/fish/${setting.toLowerCase()}`} >
                    <MenuItem key={setting} onClick={() => setAnchorElFish(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box onClick={(event) => setAnchorElFish(event.currentTarget)}>Fish</Box>
            </Box>
            <Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElSmallPet}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElSmallPet)}
                onClose={() => setAnchorElSmallPet(null)}
              >
                {petItems.map((setting) => (
                  <Link to={`/shop/small_pets/${setting.toLowerCase()}`} >
                    <MenuItem key={setting} onClick={() => setAnchorElSmallPet(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box onClick={(event) => setAnchorElSmallPet(event.currentTarget)}>Small Pets</Box>
            </Box>
            <Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElBird}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElBird)}
                onClose={() => setAnchorElBird(null)}
              >
                {petItems.map((setting) => (
                  <Link to={`/shop/birds/${setting.toLowerCase()}`} >
                    <MenuItem key={setting} onClick={() => setAnchorElBird(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box onClick={(event) => setAnchorElBird(event.currentTarget)}>Birds</Box>
            </Box>
            <Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElReptile}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElReptile)}
                onClose={() => setAnchorElReptile(null)}
              >
                {petItems.map((setting) => (
                  <Link to={`/shop/reptiles/${setting.toLowerCase()}`} >
                    <MenuItem key={setting} onClick={() => setAnchorElReptile(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box onClick={(event) => setAnchorElReptile(event.currentTarget)}>Reptiles</Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
      
      <div className="body-with-sidenav">
        {/**
         * TODO: Add side bar navigation here
        */}
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Navigation;
