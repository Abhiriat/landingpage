import React from 'react';
import { Box, Card, CardContent, Typography, Button, Container, Grid } from '@mui/material';
import { 
  AdminPanelSettings as AdminIcon, 
  School as StudentIcon, 
  Assessment as CoreIcon, 
  OndemandVideo as VideoIcon 
} from '@mui/icons-material';

export default function LandingCards() {
  const features = [
    {
      icon: <AdminIcon sx={{ fontSize: 40, color: '#FF6B9D' }} />,
      title: 'Admin Dashboard',
      description: 'Manage courses, quizzes & analytics. Auto-generate quizzes. Export PDF/Excel reports.',
      bgColor: '#FFE8F0'
    },
    {
      icon: <StudentIcon sx={{ fontSize: 40, color: '#7B68EE' }} />,
      title: 'Student Dashboard',
      description: 'Enroll, learn & test anytime. Instant results, rankings & certificates.',
      bgColor: '#E8E4FF'
    },
    {
      icon: <CoreIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      title: 'Core Features',
      description: 'Auto-marking, real-time ranks, built-in calculator. Works on phone, tablet & PC.',
      bgColor: '#E8F5E9'
    },
    {
      icon: <VideoIcon sx={{ fontSize: 40, color: '#FFB800' }} />,
      title: 'Recorded Classes',
      description: '100% pre-recorded. Study at your pace, rewind anytime.',
      bgColor: '#FFF8E1'
    }
  ];

  return (
    <Box
      sx={{
        background: '#a6c0f9ff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 2
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Feature cards */}
          <Grid item xs={12} md={6} sx={{width:{xs:'100%',md:'50%'},order:{xs:2,md:1}}}>
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}  sx={{width:{xs:'100%',md:'40%'}}}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'center', md: 'flex-start' }
                    }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          backgroundColor: feature.bgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: '#1a1a1a',
                          textAlign: {xs:'center',md:'left'}
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          lineHeight: 1.6,
                          textAlign: {xs:'center',md:'left'}

                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={6} sx={{width:{xs:'100%',md:'40%'},order:{xs:1,md:2}}}>
            <Box sx={{ 
              color: 'black', 
              pl: { md: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                          textAlign: {xs:'center',md:'left'}

                }}
              >
                Build career by the best learning platform
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.95,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                          textAlign: {xs:'center',md:'left'}

                }}
              >
                Create custom landing pages with that converts more visitors than any website. With lots of unique blocks, you can easily build a page without the recopy of this coding
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#4d74b6ff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                          

                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}