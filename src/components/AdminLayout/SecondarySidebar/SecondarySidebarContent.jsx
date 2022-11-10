import React from 'react'
import { Icon, IconButton } from '@mui/material';
import { styled, useTheme, Box } from '@mui/system';
import clsx from 'clsx';


const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : '',
  textOverflow: ellipsis ? 'ellipsis' : '',
}));


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

const SidebarRoot = styled('div')(({ theme, width }) => ({
    position: 'fixed',
    height: '100vh',
    width: width,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: theme.shadows[8],
    backgroundColor: theme.palette.primary.main,
    zIndex: 98,
    transition: 'all 0.15s ease',
    color: theme.palette.text.primary,
    '@global': {
      '@media screen and (min-width: 767px)': {
        '.content-wrap, .layout2.layout-contained, .layout2.layout-full': {
          marginRight: (props) => props.width,
        },
        '.matx-customizer': {
          right: (props) => props.width,
        },
      },
      '@media screen and (max-width: 959px)': {
        '.toolbar-menu-wrap .menu-area': {
          width: (props) => `calc(100% - ${props.width})`,
        },
      },
    },
  }));

const SecondarySidebarContent = () => {
  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;
    
  return (
    <SidebarRoot width={'50px'} className="secondary-sidebar">
      <Span sx={{ m: 'auto' }}></Span>
      <Span sx={{ m: 'auto' }}></Span>

    </SidebarRoot>
  )
}

export default SecondarySidebarContent