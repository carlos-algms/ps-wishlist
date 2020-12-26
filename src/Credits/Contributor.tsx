import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { FC } from 'react';
import styled from 'styled-components';

type ContributorProps = {
  userName: string;
  displayName: string;
};

const CardStyled = styled(Card)`
  a {
    color: ${({ theme }) => theme.palette.text.secondary};
    text-decoration: none;
  }
`;

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
