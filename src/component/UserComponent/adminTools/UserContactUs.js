import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import UserContext from '../UserContext';
import axios from 'axios';
import URLContext from '../../URLContext';


export default function UserContactUs() {
  const { url } = useContext(URLContext);
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      const getInfo = async () => {
        const queryParams = `contactUS/?&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}&type=${encodeURIComponent(user.type)}`;
        try {
          const response = await axios.get(url + queryParams);
          setUserData(response.data.data);
        } catch (error) {
          console.error("Error fetching user type:", error);
        }

      }
      getInfo();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <div className="table-responsive" style={{ border:'1px solid grey', padding: 10, marginBottom:10 }}>
      <h2>User contacted for demo</h2>
      <Table striped bordered hover style={{maxHeight:'80%', overflowY: 'auto'}}>
        <thead>
          <tr>
            <th>Email-ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>whatsapp</th>
            <th>Subject</th>
            <th>Experience</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.length > 0 ? (
            userData.map((item, idx) => (
              <tr key={item.email+idx}>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.whatsapp}</td>
                <td>{item.subject}</td>
                <td>{item.experience}</td>
                <td>{item.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7"> No Data available </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}
