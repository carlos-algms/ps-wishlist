import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import Contributor from './Contributor';

const ContributorsList: FC = () => {
  return (
    <div>
      <Typography variant="h4">Contributors: </Typography>
      <Contributor userName="carlos-algms" displayName="Carlos Gomes" />
    </div>
  );
};

export default ContributorsList;
