import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMainContent = styled.div`
  min-height: 99.9vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;

  > * {
    flex: 0 0;
  }

  .default-container {
    flex: 1 0;
    padding-top: ${({ theme }) => theme.spacing(2)}px;
  }
`;

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
