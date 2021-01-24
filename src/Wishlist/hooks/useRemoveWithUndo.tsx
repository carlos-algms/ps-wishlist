import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';

import {
  includeItemToWishlistStorage,
  removeProductFromWishListStorage,
  WishlistItem,
} from '../psWishlistStorage';

export default function useRemoveWithUndo(): (item: WishlistItem) => unknown {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return useCallback(
    (item: WishlistItem): void => {
      const { sku, name } = item;

      const snackbarKey = enqueueSnackbar(`${name} removed`, {
        action: function UndoButton() {
          return (
            <Button
              color="secondary"
              onClick={() => {
                closeSnackbar(snackbarKey);
                void includeItemToWishlistStorage(item);
              }}
            >
              Undo
            </Button>
          );
        },
      });

      void removeProductFromWishListStorage(sku);
    },
    [enqueueSnackbar, closeSnackbar],
  );
}
