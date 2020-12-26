import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FC } from 'react';
import Credits from './Credits';

const CreditsCard: FC = () => {
  return (
    <Card>
      <CardContent>
        <Credits />
      </CardContent>
    </Card>
  );
};

export default CreditsCard;
