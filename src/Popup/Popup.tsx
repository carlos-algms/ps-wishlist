import { styled } from '@material-ui/core/styles';
import { FC } from 'react';

import NotProductPage from './NotProductPage';
import PopupFooter from './PopupFooter';
import PopupProduct from './PopupProduct';
import ProductAutoInclude from './ProductAutoInclude';

const Popup: FC = () => {
  return (
    <Root>
      <PopupProduct />

      <NotProductPage />

      <PopupFooter />

      <ProductAutoInclude />
    </Root>
  );
};

export default Popup;

const Root = styled('main')(({ theme }) => ({
  minWidth: 450,
  padding: theme.spacing(1, 2),
}));
