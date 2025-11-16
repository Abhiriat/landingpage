import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function LandingFeatures() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  const features = [
    {
      title: "Admin Dashboard",
      subtitle: "Comprehensive management",
      highlight: "Streamline course oversight.",
      highlightColor: "Empower administrators with full control.",
      description: "Add and manage courses, assignments, and quizzes; upload notes, video recordings, and mock tests; create and update quizzes, assignments, and course materials; export detailed analytics in PDF and Excel formats for course-wise and student-wise performance; monitor student progress for respective courses; auto-generate quizzes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Student Dashboard",
      subtitle: "Seamless learning access",
      highlight: "Enroll and engage effortlessly.",
      highlightColor: "Access all resources in one place.",
      description: "Enroll in multiple courses; access course notes, assignments, quizzes, and recorded video sessions; attempt quizzes and mock tests with instant mark calculation; use integrated calculator functionality for assignments or tests; view detailed certificates upon successful course completion; all learning content is recorded and uploaded—no live sessions.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    },
    {
      title: "Core Functionalities",
      subtitle: "Intelligent automation",
      highlight: "Auto-calculate results.",
      highlightColor: "Real-time insights and rankings.",
      description: "Auto-calculation of quiz results and student marks; real-time ranking system for quizzes and tests per course; built-in calculator for quiz and test support; responsive design for all devices (mobile, tablet, desktop).",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Scalable Performance",
      subtitle: "Robust infrastructure",
      highlight: "Handle large datasets.",
      highlightColor: "Ensure smooth operation at scale.",
      description: "Scalable system to handle large datasets; supports high-volume student enrollments, course materials, and performance tracking without compromising speed or reliability.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          
          if (sectionMiddle < windowHeight / 2 && sectionMiddle > -windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Desktop View - Two column layout with sticky image */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 8, position: 'relative' }}>
          {/* Left side - Scrolling content */}
          <Box sx={{ flex: 1, pr: 4 }}>
            {features.map((feature, index) => (
              <Box
                key={index}
                ref={el => sectionsRef.current[index] = el}
                sx={{
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  opacity: activeSection === index ? 1 : 0.3,
                  transition: 'opacity 0.5s ease',
                  py: 3
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                    color: '#666',
                    fontSize: '0.875rem'
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: '#1f54dd',
                      borderRadius: '50%'
                    }}
                  />
                  {feature.subtitle}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.0rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2
                  }}
                >
                  {feature.highlight}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '1.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3,
                    background: '#1f54dd',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {feature.highlightColor}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: '#666',
                    mb: 4,
                    maxWidth: 500,
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right side - Sticky images */}
          <Box
            sx={{
              flex: 1,
              position: 'sticky',
              top: '20vh',
              height: 'fit-content',
              maxHeight: '60vh',
              alignSelf: 'flex-start'
            }}
          >
            <Box sx={{ position: 'relative', height: 500, maxWidth: '100%', borderRadius: 4, overflow: 'hidden' }}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: activeSection === index ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)'
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Mobile View - Image first, then content */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                mb: 6,
                pb: 6,
                borderBottom: index < features.length - 1 ? '1px solid #e0e0e0' : 'none'
              }}
            >
              {/* Image first */}
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  borderRadius: 3,
                  overflow: 'hidden',
                  mb: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)'
                  }}
                />
              </Box>

              {/* Content second */}
              <Typography
                variant="caption"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 2,
                  color: '#666',
                  fontSize: '0.875rem'
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: '#1f54dd',
                    borderRadius: '50%'
                  }}
                />
                {feature.subtitle}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2
                }}
              >
                {feature.highlight}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                  background: '#1f54dd',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {feature.highlightColor}
              </Typography>

              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.6
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}