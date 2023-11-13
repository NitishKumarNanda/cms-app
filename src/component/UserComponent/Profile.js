import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import UserContext from './UserContext'
import { useNavigate } from 'react-router-dom';
import Normal from './Normal';
import axios from 'axios';
import Admin from './Admin';
import URLContext from '../URLContext';

export default function Profile() {
  const { url } = useContext(URLContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      try {
        const session = JSON.parse(localStorage.getItem('placeMehta'));
        if (session.email && session.token && session.account_type) {
          const fetchType = async () => {
            const queryParams = `?action=${encodeURIComponent('checkUser')}&email=${encodeURIComponent(session.email)}&token=${encodeURIComponent(session.token)}&account_type=${encodeURIComponent(session.account_type)}`;
            try {
              const response = await axios.get(url+queryParams);
              console.log(response.data);
              if(response.data.type===session.account_type) setUser(session);
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
  }, [])
  return (
    <Container>
      <h3 style={{ padding: 10, margin: 10, textAlign: 'center' }}>{user && user.email}</h3>
      {
        user && user.account_type === 'admin' && <Admin />
      }
      {
        user && user.account_type === 'normal' && <Normal />
      }
    </Container>
  )
}
