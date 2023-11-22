import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import UserContext from '../UserContext';
import axios from 'axios';
import URLContext from '../../URLContext';


export default function UserTable() {
  const { url } = useContext(URLContext);
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      const getInfo = async () => {
        const queryParams = `userProfile/?&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}&type=${encodeURIComponent(user.type)}`;
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
      <h2>User List</h2>
      <Table striped bordered hover style={{maxHeight:'80%', overflowY: 'auto'}}>
        <thead>
          <tr>
            <th>Email-ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Country</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.length > 0 ? (
            userData.map((item) => (
              <tr key={item.email}>
                <td>{item.email}</td>
                <td>{item.first_name + " " + item.last_name}</td>
                <td>{item.date_of_birth}</td>
                <td>{item.gender}</td>
                <td>{item.street_address + " " + item.city + " " + item.state_province + "-" + item.postal_code}</td>
                <td>{item.country}</td>
                <td>{item.phone_number}</td>
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
