import { Fragment, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartIcon from '../components/cart/cart-icon';
import CartDropdown from '../components/cart/cart-dropdown';

import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart.context';

import { signOutUser } from '../utils/firebase/firebase.utils';


import Footer from '../components/Footer';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
const settings = ['Profile', 'Settings'];

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElSideNav, setAnchorElSideNav] = useState(false);

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

  return (
    <Fragment>
      <div className="navigation-container" style={{ height: '70px', width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenSideNav}
                color="inherit"
              >
                {anchorElSideNav ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Link to='/' >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                  Pet's World
              </Typography>
            </Link>
            </Box>
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
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <Link key={page} to={`/${page.toLowerCase()}`}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
                </Link>
              ))}
            </Box> */}
            
            <Search sx={{marginRight: '2rem'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

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
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  <div as='span' onClick={signOutUser}>
                    Logout
                  </div>
                </Menu>
              </div>
                ) : (
                  <Link to='/auth'>Sign in</Link>
                )}
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ flexGrow: 0 }}> 
                <CartIcon />
                {isCartOpen && <CartDropdown />}
              </Box>
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
