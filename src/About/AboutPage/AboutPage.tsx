import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import type { FC } from 'react';
import ContributorsList from '../../Credits/ContributorsList';
import CreditsCard from '../../Credits/CreditsCard';
import Layout from '../../shared/components/Layout';
import AboutCard from '../AboutCard/AboutCard';

const AboutPage: FC = () => {
  return (
    <Layout>
      <Container>
        <AboutCard />
        <Box mt={4} />
        <CreditsCard />
        <Box mt={4} />
        <ContributorsList />
      </Container>
    </Layout>
  );
};

export default AboutPage;
