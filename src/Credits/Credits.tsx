import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import type { FC } from 'react';

import ExternalLink from '../shared/components/ExternalLink';

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
            <ExternalLink href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">
              DinosoftLabs
            </ExternalLink>{' '}
            from{' '}
            <ExternalLink href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </ExternalLink>
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
