import React from 'react'
import { Box, styled } from '@mui/material';
import useSettings from '../../hooks/useSettings';
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

  const BrandRoot = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 18px 20px 29px',
  }));

  const StyledSpan = styled(Span)(({ mode }) => ({
    fontSize: 18,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
  }));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.Layout1Settings.leftSidebar;
  const { mode } = leftSidebar;
  

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
      <StyledSpan mode={mode} className="sidenavHoverShow">
        EMP
        </StyledSpan>
        </Box>

        <Box className="sidenavHoverShow" sx={{ display: mode === 'compact' ? 'none' : 'block' }}>
        {children || null}
      </Box>
    
    </BrandRoot>
  )
}

export default Brand