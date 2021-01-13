import CssBaseline from '@material-ui/core/CssBaseline';
import { styled } from '@material-ui/core/styles';
import type { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <StyledMainContent>
        <div className="default-container">{children}</div>
      </StyledMainContent>
    </>
  );
};

export default Layout;

const StyledMainContent = styled('div')(({ theme }) => ({
  minHeight: '99.9vh',
  display: 'flex',
  flexDirection: 'column',
  background: '#f5f5f5',

  '& > *': {
    flex: '0 0',
  },

  '& .default-container': {
    flex: '1 0',
    paddingTop: theme.spacing(2),
  },
}));
