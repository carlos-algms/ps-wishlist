import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { styled } from '@material-ui/core/styles';
import type { FC } from 'react';

import ExternalLink from '../shared/components/ExternalLink';
import { trackExternalLink } from '../Tracking/tracking';

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
            rel="noreferrer noopener"
            alt={`${userName} picture`}
            src={`${url}.png?size=60`}
            onClick={() => trackExternalLink(url)}
          />
        }
        title={<ExternalLink href={url}>{displayName}</ExternalLink>}
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
