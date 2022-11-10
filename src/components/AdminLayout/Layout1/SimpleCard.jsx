import { Card } from '@mui/material';
import { Box, styled } from '@mui/system';

const CardRoot = styled(Card)(() => ({
  height: '100%',
  padding: '20px 24px',
}));

const CardTitle = styled('div')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
//   marginBottom: !subtitle && '16px',
}));

const SimpleCard = ({ children, title, subtitle, icon }) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle >User management</CardTitle>
      {/* {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>} */}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
