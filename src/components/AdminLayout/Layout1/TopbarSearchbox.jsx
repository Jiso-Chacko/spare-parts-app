import React, { useState, Fragment } from 'react';
import { Icon, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const topBarHeight = 64

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: topBarHeight,
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.text.primary,
    },
  }));

  const SearchInput = styled('input')(({ theme }) => ({
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    paddingLeft: '20px',
    height: 'calc(100% - 5px)',
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&::placeholder': { color: theme.palette.text.primary },
  }));


const TopbarSearchbox = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
        {!open && (
        <IconButton onClick={toggle}>
          {/* <Icon sx={{ color: textColor }}>search</Icon> */}
          <SearchIcon sx={{ color: textColor }} />
        </IconButton>
      )}

        {open && (
        <SearchContainer>
          <SearchInput type="text" placeholder="Search here..." autoFocus />
          <IconButton onClick={toggle} sx={{ mx: 2, verticalAlign: 'middle' }}>
            {/* <Icon sx={{ color: textColor }}>close</Icon> */}
            <CloseIcon sx={{ color: textColor }}/>
          </IconButton>
        </SearchContainer>
      )}
    </Fragment>
  )
}

export default TopbarSearchbox