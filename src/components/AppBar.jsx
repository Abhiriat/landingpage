import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Divider
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export default function LearnHubAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Courses', icon: <SchoolIcon fontSize="small" /> },
    { label: 'Resources', icon: <AutoStoriesIcon fontSize="small" /> },
    { label: 'Community', icon: <GroupsIcon fontSize="small" /> },
    { label: 'Blog', icon: <TipsAndUpdatesIcon fontSize="small" /> }
  ];

  const coursesMenuItems = [
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Cloud Computing',
    'AI & Machine Learning'
  ];

  // Mobile drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* <MenuBookIcon sx={{ color: '#2563eb', fontSize: 28 }} /> */}
        <Typography variant="h6" sx={{ color: '#1f2937', fontWeight: 600 }}>
          LearningPlatform
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#4b5563' }}>
                {item.icon}
                <ListItemText primary={item.label} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Button 
          fullWidth
          sx={{ 
            color: '#4b5563',
            textTransform: 'none',
            justifyContent: 'flex-start',
            '&:hover': { backgroundColor: '#f3f4f6' }
          }}
        >
          Sign In
        </Button>
        <Button 
          fullWidth
          variant="contained"
          sx={{ 
            backgroundColor: '#2563eb',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#1d4ed8' }
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: '#fff',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* <MenuBookIcon sx={{ color: '#2563eb', fontSize: 32 }} /> */}
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  color: '#1f2937',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.5px'
                }}
              >
                LearningPlatform
              </Typography>
            </Box>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Courses Dropdown */}
                <Button 
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleMenuOpen}
                  sx={{ 
                    color: '#4b5563',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    px: 2,
                    '&:hover': {
                      backgroundColor: '#f3f4f6',
                      color: '#1f2937'
                    }
                  }}
                >
                  Courses
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    mt: 1,
                    '& .MuiPaper-root': {
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      borderRadius: '8px',
                      minWidth: 200
                    }
                  }}
                >
                  {coursesMenuItems.map((item) => (
                    <MenuItem 
                      key={item}
                      onClick={handleMenuClose}
                      sx={{ 
                        fontSize: '0.9rem',
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: '#f3f4f6'
                        }
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>

                {/* Other Nav Items */}
                {navItems.slice(1).map((item) => (
                  <Button 
                    key={item.label}
                    startIcon={item.icon}
                    sx={{ 
                      color: '#4b5563',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      px: 2,
                      '&:hover': {
                        backgroundColor: '#f3f4f6',
                        color: '#1f2937'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
            
            {/* Desktop Auth Buttons */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Button 
                  sx={{ 
                    color: '#4b5563',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    px: 2.5,
                    '&:hover': {
                      backgroundColor: '#f3f4f6',
                      color: '#1f2937'
                    }
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="contained"
                  sx={{ 
                    backgroundColor: '#2563eb',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    px: 3,
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    '&:hover': {
                      backgroundColor: '#1d4ed8',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: '#1f2937' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250 
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}