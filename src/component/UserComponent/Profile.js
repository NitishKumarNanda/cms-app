import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import UserContext from './UserContext'
import { useNavigate, useParams } from 'react-router-dom';
import Normal from './Normal';
import axios from 'axios';
import Admin from './Admin';
import URLContext from '../URLContext';
import FooterMain from '../FooterMain';

export default function Profile() {
  const { url } = useContext(URLContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { tab } = useParams();
  const handleProfile = () => {
    try {
      const session = JSON.parse(localStorage.getItem('placeMehta'));
      if (session.email && session.token && session.type) {
        const fetchType = async () => {
          const queryParams = `loginCheck/?email=${encodeURIComponent(session.email)}&token=${encodeURIComponent(session.token)}&type=${encodeURIComponent(session.type)}`;
          try {
            const response = await axios.get(url + queryParams);

            if (response.status === 200) setUser(session);
            else {
              try {
                localStorage.removeItem('placeMehta', '')
                setUser(null);
              } catch (error) {
                console.log(error);
              }
              navigate('/users/login');
            }
          } catch (error) {
            console.error("Error fetching user type:", error);
            navigate('/users/login');
          }
        };
        fetchType();

      } else {
        navigate('/users/login');
      }
    } catch (error) {
      console.error("Error parsing session data:", error);
      navigate('/users/login');
    }
  }
  useEffect(() => {
    if (!user) {
      handleProfile()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Container style={{ flex: 1, paddingTop: 10}}>
        {user && user.type === 'admin' && <Admin />}
        {user && user.type === 'normal' && <Normal tab={tab} />}
      </Container>
      <FooterMain />
    </div>
  )
}
