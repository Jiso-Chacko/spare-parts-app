import React from 'react'
import { AppBar, Button, ThemeProvider, Toolbar } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import useSettings from '../../hooks/useSettings'
import { Box } from '@mui/material';

import clsx from 'clsx';


const topBarHeight = 64;

const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : '',
  textOverflow: ellipsis ? 'ellipsis' : '',
}));

const Paragraph = ({ children, className, ellipsis, textTransform, ...props }) => {
    return (
      <StyledBox
        textTransformStyle={textTransform}
        ellipsis={ellipsis}
        className={clsx({
          [className || '']: true,
        })}
        component="p"
        mb={0}
        mt={0}
        fontSize="14px"
        {...props}
      >
        {children}
      </StyledBox>
    );
  };

const Span = ({ children, className, ellipsis, textTransform, ...props }) => {
    return (
      <StyledBox
        textTransformStyle={textTransform}
        ellipsis={ellipsis}
        className={clsx({
          [className || '']: true,
        })}
        component="span"
        lineHeight="1.5"
        {...props}
      >
        {children}
      </StyledBox>
    );
  };


const AppFooter = styled(Toolbar)(() => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: topBarHeight,
    '@media (max-width: 499px)': {
      display: 'table',
      width: '100%',
      minHeight: 'auto',
      padding: '1rem 0',
      '& .container': {
        flexDirection: 'column !important',
        '& a': { margin: '0 0 16px !important' },
      },
    },
  }));


const FooterContent = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1rem',
    maxWidth: '1170px',
    margin: '0 auto',
  }));

const Footer = () => {

  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;


  return (
    <>
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
        <AppFooter>
          <FooterContent>
            <a href="#">
              <Button variant="contained" color="secondary">
                Get MatX Pro
              </Button>
            </a>
            <Span sx={{ m: 'auto' }}></Span>
            <Paragraph sx={{ m: 0 }}>
              Design and Developed by <a href="#">Jiso Chacko</a>
            </Paragraph>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
    
    </>
  )
}

export default Footer