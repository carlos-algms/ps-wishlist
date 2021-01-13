import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { styled } from '@material-ui/core/styles';
import type { FC } from 'react';

type ContributorProps = {
  userName: string;
  displayName: string;
};

const Contributor: FC<ContributorProps> = ({ userName, displayName }) => {
  const url = `https://github.com/${userName}`;

  return (
    <CardStyled>
      <CardHeader
        avatar={
          <Avatar
            component="a"
            href={url}
            target="_blank"
            rel="noreferrer"
            alt={`${userName} picture`}
            src={`${url}.png?size=60`}
          />
        }
        title={
          <a href={url} target="_blank" rel="noreferrer">
            {displayName}
          </a>
        }
      />
    </CardStyled>
  );
};

export default Contributor;

const CardStyled = styled(Card)(({ theme }) => ({
  '& a': {
    color: theme.palette.text.secondary,
    'text-decoration': 'none',
  },
}));
