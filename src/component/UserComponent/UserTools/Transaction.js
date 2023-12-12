import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import UserContext from '../UserContext';
import URLContext from '../../URLContext';
import axios from 'axios';

export default function Transaction() {
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);
  const { url } = useContext(URLContext);
  const [msg, setMsg] = useState("No Data Found")
  const fetchData = async () => {
    try {
      const query = `transaction/?&email=${encodeURIComponent(user.email)}&token=${encodeURIComponent(user.token)}&type=${encodeURIComponent(user.type)}`;
      const response = await axios.get(url + query);
      if (response.data.status === 200) {
        setData([...response.data.data]);
      } else {
        setMsg(response.data.error);
      }
    } catch (error) {
      console.error('Error fetching transaction data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className=" mt-5" style={{ border: '1px solid grey', padding: 20, marginBottom: 20, minWidth:'900px' }}>
      <h1>Transaction List</h1>
      <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {data.length > 0 ?
          <Table striped bordered hover>
            <thead>
              <tr style={{ backgroundColor: '#ff6666' }}>
                <th>S.No.</th>
                <th>Course Name</th>
                <th>Transaction Id</th>
                <th>UTR</th>
                <th>Name</th>
                <th>UPI ID</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((transaction, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{transaction.coursesName}</td>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.utr}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.upiId}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}

            </tbody>
          </Table>
          :
          <div style={{ padding: 20 }}>
            <p>{msg}</p>
          </div>
        }
      </div>
    </div>
  )
}
