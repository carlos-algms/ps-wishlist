import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';

import { SortBy } from '../Sort';
import { saveSortByToStorage } from '../sortByStorageClient';
import useSortByValue from '../useSortByValue';

const options = [
  [SortBy.DateAddedDesc, 'Newest first'],
  [SortBy.DateAddedAsc, 'Oldest first'],
  [SortBy.PriceLower, 'Price Low to High'],
  [SortBy.PriceHigher, 'Price High to Low'],
  [SortBy.UserDefined, 'Your ranked order'],
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    background: 'white',
    borderRadius: '4px',
    boxShadow: theme.shadows[1],
    margin: `0 0 ${theme.spacing(1)}px 0`,
    flex: '1 0 auto',
    padding: theme.spacing(1),
  },
}));

const SortMenu: FC = () => {
  const currentSortBy = useSortByValue();
  const classes = useStyles();

  return (
    <>
      <Box mb={2} ml={1}>
        <Typography variant="h5">Sort by:</Typography>
      </Box>

      {currentSortBy !== null && (
        <RadioGroup name="sortBy" value={currentSortBy} onChange={handleChange}>
          {options.map(([sortBy, label]) => (
            <FormControlLabel
              key={sortBy}
              className={classes.formControl}
              value={sortBy}
              control={<Radio color="primary" />}
              label={label}
            />
          ))}
        </RadioGroup>
      )}
    </>
  );
};

export default SortMenu;

const handleChange: RadioGroupProps['onChange'] = (_e, value) => {
  const sortBy = parseInt(value);
  void saveSortByToStorage(sortBy);
};
