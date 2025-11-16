import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import learning from '../assets/learning.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
  },
});

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: {xs:'auto',md:'50vh'},
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3
              }}
            >
              <Box
                component="img"
                src={learning}
                alt="Learning Platform"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '80%', md: '50%', lg: '35%' },
                  height: 'auto',
                  borderRadius: '12px',
                }}
              />
            </Box>
            
            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                color: 'text.primary',
              }}
            >
              A platform that helps you{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                }}
              >
                speak
              </Box>
              ,
              <br />
              not just{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                }}
              >
                study
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Master real-life conversations through personalized challenges,
              speech practice, and AI-driven feedback.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: 'primary.main',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  px: 3,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(37, 99, 235, 0.04)',
                  },
                }}
              >
                How it works
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  '&:hover': {
                    backgroundColor: '#1d4ed8',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  },
                }}
              >
                Start Practicing
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}