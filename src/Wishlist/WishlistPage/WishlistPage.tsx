import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Layout from '../../shared/components/Layout';
import SortMenu from '../Sort/SortMenu/SortMenu';
import WishlistListSortable, {
  WishlistListSortableProps,
} from '../WishlistSortable/WishlistSortable';

export type WishlistPageProps = WishlistListSortableProps;

const WishlistPage: FC<WishlistPageProps> = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box mb={2} mt={5}>
                <SortMenu />
              </Box>
            </Grid>
            <Grid item xs>
              <Box mb={3}>
                <Typography variant="h3">My Playstation Wishlist</Typography>
              </Box>
              <WishlistListSortable {...props} />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </DndProvider>
  );
};

export default WishlistPage;
