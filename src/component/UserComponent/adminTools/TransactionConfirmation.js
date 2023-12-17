import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import URLContext from '../../URLContext';
import UserContext from '../UserContext';

export default function TransactionConfirmation() {
    const [data, setData] = useState([]);
    const { user } = useContext(UserContext);
    const { url } = useContext(URLContext);
    const [msg, setMsg] = useState("No Data Found");
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
    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).replace(',', ''); // Removing comma after the date

        return formattedDate;
    };
    const confirmData = async (trans) => {
        try {
            console.log({
                ...trans,
                email: user.email,
                token: user.token,
                type: user.type
            })
            const response = await axios.post(url + 'transaction/confirmed/', {
                userEmail: user.email,
                email: trans.email,
                token: user.token,
                type: user.type,
                transactionId: trans.transactionId,
                transactionConfirmed: trans.transactionConfirmed,
                utr: trans.utr,
                amount: trans.amount
            });
            if (response.data.status === 200) {
                console.log(response.data.data);
            }
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            console.log({ status: 400, message: 'An error occurred while transaction confirmation.' });
        }
    }
    const handleCheckboxChange = async (e) => {
        const id = parseInt(e.target.value); // Convert the value to an integer
        const updatedData = data.map((transaction) => {
            if (transaction.id === id) {
                confirmData({
                    ...transaction,
                    transactionConfirmed: transaction.transactionConfirmed === "Yes" ? "No" : "Yes"
                })
                return {
                    ...transaction,
                    transactionConfirmed: transaction.transactionConfirmed === "Yes" ? "No" : "Yes"
                };
            }
            return transaction;
        });
        setData(updatedData);
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <div className=" mt-5" style={{ border: '1px solid grey', padding: 20, marginBottom: 20, minWidth: '900px' }}>
            <h1>Payment received List</h1>
            <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {data.length > 0 ?
                    // <Table striped bordered hover>
                    <table className="styled-table">
                        <thead>
                            <tr style={{ backgroundColor: '#ff6666' }}>
                                <th style={{ textAlign: 'right' }}>S.No.</th>
                                <th>Date</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Course Name</th>
                                <th>Transaction Id</th>
                                <th>UTR</th>
                                
                                <th>UPI ID</th>
                                <th>Amount</th>
                                <th>Is Received?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((transaction, idx) => (
                                <tr className={transaction.transactionConfirmed === "Yes" ? "true" : "false"} key={idx} >
                                    <td style={{ textAlign: 'right' }}>{transaction.id}</td>
                                    <td >{formatDateString(transaction.created_at)}</td>
                                    <td>{transaction.email}</td>
                                    <td>{transaction.name}</td>
                                    <td style={{ minWidth: 200 }}>{transaction.coursesName}</td>
                                    <td>{transaction.transactionId}</td>
                                    <td>{transaction.utr}</td>
                                    
                                    <td>{transaction.upiId}</td>
                                    <td>{transaction.amount}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <input type='checkbox' value={transaction.id} checked={transaction.transactionConfirmed === "Yes" ? true : false} onChange={handleCheckboxChange} />
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    
                    {/* </Table> */}
                    </table>
                :
                <div style={{ padding: 20 }}>
                    <p>{msg}</p>
                </div>
                }
            </div>
        </div>
    )
}
