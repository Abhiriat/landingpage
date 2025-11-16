import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Paper,
  Fade,
  Grow
} from '@mui/material';
import { School, People, EmojiObjects, TrendingUp } from '@mui/icons-material';

const useCountUp = (target, duration = 2500, delay = 0, start = false) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      const startTime = Date.now();
      animationRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const newCount = target * easeProgress;
        setCount(newCount);
        if (progress >= 1) {
          setCount(target);
          if (animationRef.current) {
            clearInterval(animationRef.current);
          }
        }
      }, 20);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [start, target, duration, delay]);

  return count;
};

export default function LandingStats() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const stats = [
    {
      target: 500,
      displayFormatter: (count) => `${Math.floor(count)}+`,
      label: 'Courses Available',
      description: 'Across multiple disciplines',
      color: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
      icon: <School sx={{ fontSize: isMobile ? 40 : 50 }} />
    },
    {
      target: 10000,
      displayFormatter: (count) => `${Math.floor(count / 1000)}k+`,
      label: 'Students Learning',
      description: 'Active learners worldwide',
      color: '#00897b',
      gradient: 'linear-gradient(135deg, #00897b 0%, #26a69a 100%)',
      icon: <People sx={{ fontSize: isMobile ? 40 : 50 }} />
    },
    {
      target: 100,
      displayFormatter: (count) => `${Math.floor(count)}+`,
      label: 'Expert Instructors',
      description: 'Industry professionals',
      color: '#7b1fa2',
      gradient: 'linear-gradient(135deg, #7b1fa2 0%, #ab47bc 100%)',
      icon: <EmojiObjects sx={{ fontSize: isMobile ? 40 : 50 }} />
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 0, md: 12 },
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(25, 118, 210, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(123, 31, 162, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                background: 'black',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Impact in Numbers
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#546e7a',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              Join thousands of learners on their journey to success
            </Typography>
          </Box>
        </Fade>

        <Box ref={containerRef}>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {stats.map((stat, index) => {
              const count = useCountUp(stat.target, 2000, index * 300, isVisible);
              return (
                <Grid item xs={12} sm={6} md={4} sx={{width:{xs:'100%',md:'20%'}}} key={index}>
                  <Grow in timeout={1000 + index * 200}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 4, md: 5 },
                        textAlign: 'center',
                        position: 'relative',
                        borderRadius: 4,
                        background: 'white',
                        border: '1px solid',
                        borderColor: 'rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: stat.gradient,
                          transform: 'scaleX(0)',
                          transformOrigin: 'left',
                          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover': {
                          transform: 'translateY(-12px)',
                          boxShadow: `0 20px 40px ${stat.color}20`,
                          borderColor: stat.color,
                          '&::before': {
                            transform: 'scaleX(1)',
                          },
                          '& .stat-icon': {
                            transform: 'scale(1.1) rotateY(360deg)',
                          },
                          '& .stat-value': {
                            transform: 'scale(1.05)',
                          }
                        },
                      }}
                    >
                      <Box
                        className="stat-icon"
                        sx={{
                          display: 'inline-flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: { xs: 80, md: 90 },
                          height: { xs: 80, md: 90 },
                          borderRadius: '50%',
                          background: `${stat.color}10`,
                          color: stat.color,
                          mb: 3,
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: -2,
                            borderRadius: '50%',
                            background: stat.gradient,
                            opacity: 0.2,
                            filter: 'blur(8px)',
                          }
                        }}
                      >
                        {stat.icon}
                      </Box>

                      <Typography
                        className="stat-value"
                        variant="h2"
                        component="div"
                        sx={{
                          fontWeight: 800,
                          background: stat.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          mb: 1.5,
                          fontSize: { xs: '2.75rem', sm: '3.5rem', md: '3.25rem' },
                          transition: 'transform 0.3s ease',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {stat.displayFormatter(count)}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          color: '#263238',
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                        }}
                      >
                        {stat.label}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#78909c',
                          fontWeight: 400,
                          fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        }}
                      >
                        {stat.description}
                      </Typography>

                      <Box
                        sx={{
                          mt: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 0.5,
                          color: stat.color,
                          fontWeight: 500,
                          fontSize: '0.875rem',
                        }}
                      >
                        <TrendingUp sx={{ fontSize: 18 }} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Growing daily
                        </Typography>
                      </Box>
                    </Paper>
                  </Grow>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Fade in timeout={1600}>
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(123, 31, 162, 0.05) 100%)',
              border: '1px solid',
              borderColor: 'rgba(25, 118, 210, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#263238',
                mb: 1,
              }}
            >
              Ready to be part of our success story?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#546e7a',
              }}
            >
              Join our community and start your learning journey today
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}