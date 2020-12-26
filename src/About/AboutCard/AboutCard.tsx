import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { styled as myUiStyled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import type { FC } from 'react';

const CardStyled = myUiStyled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '500px',
  padding: theme.spacing(3),
  margin: '0 auto',
}));

const CardMediaStyled = myUiStyled(CardMedia)({
  width: '82px',
});

const AboutCard: FC = () => {
  return (
    <CardStyled>
      <CardContent>
        <Typography component="h5" variant="h5">
          My PlayStation Wishlist
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          V<span>{process.env.APP_VERSION}</span> - <span>{process.env.BUILD_DATE}</span>
        </Typography>
      </CardContent>
      <CardMediaStyled
        image="./images/icons/wishlist-128.png"
        title="My PlayStation Wishlist logo"
      />
    </CardStyled>
  );
};

export default AboutCard;
