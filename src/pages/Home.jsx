import { Helmet } from 'react-helmet';
import Register from './Register';
import { useAuth } from 'hooks';
import { Box } from 'components/GlobalStyle';
import { HomeGlobalStyle } from './Home.styled';
import { HIPhoneOutline } from '@icongo/hi/lib/HIPhoneOutline';
// import { GiOldMicrophone } from 'react-icons/gi';
export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet title="Phonebook" />

      {!isLoggedIn ? (
        <Register />
      ) : (
        <Box>
          <h1 style={{ fontSize: 44 }}>WELCOME !!!</h1>
          <b
            style={{
              display: 'inline-block',
              fontSize: 20,
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            It's your
          </b>
          <h2 style={{ fontSize: 44 }}>Phonebook Organizer</h2>

          <HIPhoneOutline />
          <HomeGlobalStyle />
        </Box>
      )}
    </>
  );
}