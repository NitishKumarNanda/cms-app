import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import URLContext from '../../URLContext';
import UserContext from '../UserContext';
import { Col, Row } from 'react-bootstrap';

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
                console.log(response.data.data);
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
        <div style={{ border: '1px solid grey',padding:10, marginBottom: 20}}>
            <h1>Payment received List</h1>
            
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                {data.length > 0 ?
                    // <Table striped bordered hover>
                    <>
                        {data.map((transaction, idx) => (

                            <div  key={idx} style={{padding:10 }}>
                                <Row className={transaction.transactionConfirmed === "Yes" ? "true" : "false"} style={{border:'0px solid black', borderRadius:10, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
                                    <Col xs={12} sm={12} md={3} lg={3}>
                                        <img src={url+'uploads/'+transaction.profile_picture_url} alt='img' height={200} style={{maxWidth:200}}/>
                                    </Col>
                                    <Col xs={12} sm={12} md={8} lg={8}>
                                        <div style={{padding:10}}>
                                            {transaction.resume_url?<>Download : <a href={url + 'uploads/' +transaction.resume_url}>Resume</a></> : <strong>Resume is Missing</strong>}
                                            <br />
                                            Name : <strong>{transaction.name}</strong> , Email : <strong>{transaction.email}</strong><br />
                                            Address : <strong>{transaction.street_address +' '+ transaction.city+' '+transaction.state_province+' '+transaction.country+" "+transaction.postal_code}</strong><br />
                                            Phone : <strong>{transaction.phone_number }</strong> , Whats' App Number : <strong>{transaction.whatsApp }</strong><br />
                                            Course Name : <strong>{transaction.coursesName}</strong> , Payment Amount : <strong>{transaction.amount}</strong><br />
                                            Transaction ID: <strong>{transaction.transactionId}</strong>, Transaction UTR : <strong>{transaction.utr}</strong>, Transaction UPI-ID : <strong>{transaction.upiId}</strong>, Time : <strong>{formatDateString(transaction.created_at)}</strong><br />
                                            <div>
                                                Is Received? : <input type='checkbox' value={transaction.id} checked={transaction.transactionConfirmed === "Yes" ? true : false} onChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}

                    </>
                    :
                    <div style={{ padding: 20 }}>
                        <p>{msg}</p>
                    </div>
                }
            </div>
        </div>
    )
}
