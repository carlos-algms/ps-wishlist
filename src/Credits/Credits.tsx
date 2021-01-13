import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import type { FC } from 'react';

const Credits: FC = () => {
  return (
    <div>
      <Typography component="h5" variant="h5">
        Special Thanks:
      </Typography>

      <Box mt={2}>
        <VerticalAlign>
          <img src="images/icons/wishlist-24.png" alt="main icon" />
          <div>
            Main Icon made by{' '}
            <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">
              DinosoftLabs
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </VerticalAlign>
      </Box>
    </div>
  );
};

export default Credits;

const VerticalAlign = styled('div')({
  display: 'flex',
  'align-items': 'center',
});
