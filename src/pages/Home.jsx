import { Helmet } from 'react-helmet';
import Register from './Register';
import { useAuth } from 'hooks';
import { Box } from 'components/GlobalStyle';
import { HomeGlobalStyle } from './Home.styled';
import { HIPhoneOutline } from '@icongo/hi/lib/HIPhoneOutline';
export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet title="Phonebook" />

      {!isLoggedIn ? (
        <Register />
      ) : (
        <Box>
          <h1 style={{ fontSize: 36 }}>Welcome !!!</h1>
          <b
            style={{
              display: 'inline-block',
              fontSize: 24,
              marginBottom: '12px',
              textTransform: 'none',
            }}
          >
            It's your
          </b>
          <h2 style={{ fontSize: 32 }}>Phonebook Organizer</h2>

          <HIPhoneOutline />
          <HomeGlobalStyle />
        </Box>
      )}
    </>
  );
}