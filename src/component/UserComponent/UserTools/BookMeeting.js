import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import UserContext from '../UserContext'
import axios from 'axios';
import URLContext from '../../URLContext';

export default function BookMeeting({updateData}) {
    const { user } = useContext(UserContext);
    const {url} =useContext(URLContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('12:00');
    const [slotConfirmed, setSlotConfirmed] = useState("");
    const handleMeetingBooking = async (e) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert('Please select a date and time');
            return;
        }

        const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        const formattedDateTime = `${formattedDate} ${selectedTime}`;

        try {
            const response = await axios.post(url+'meeting', {
                email: user.email,
                token: user.token,
                type: user.type,
                time: selectedTime,
                date: formattedDateTime,
            });
            if (response.data.status === 200) {
                updateData.updateData();
                setSlotConfirmed(response.data);
                
            }
        } catch (error) {
            console.error('Error:', error);
            setSlotConfirmed({status:400, message:'An error occurred while booking the meeting.'});
        }
        setSelectedDate('');
    };
    return (
        <>
            <div className="mt-5" style={{ border: '1px solid grey', padding: 20 }}>
                <h1>Meeting Scheduler</h1>
                <div className="row mt-4">
                    <div className="col-md-6" style={{ border: '1px solid lightgrey', padding: 10 }}>
                        <h2>Select Date</h2>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MM/dd/yyyy"
                            minDate={new Date()}
                            className="form-control"
                        />
                        <h2 className="mt-3">Select Time</h2>
                        <div style={{ maxWidth: 200, marginBottom: 10 }}>
                            <TimePicker
                                value={selectedTime}
                                onChange={(time) => setSelectedTime(time)}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ border: '1px solid lightgrey', padding: 10 }}>
                        <h2>Selected Slot</h2>
                        <p>
                            {selectedDate && selectedTime
                                ? (`${selectedDate.toLocaleDateString()} ${selectedTime}`)
                                : 
                                (`No slot selected`)
                            }
                        </p>
                        <button
                            className="btn btn-primary"
                            onClick={handleMeetingBooking}
                            disabled={!selectedDate || !selectedTime}>
                            Book Meeting
                        </button>
                        {slotConfirmed &&
                            <div style={{ color: slotConfirmed.status===200?'Green':'Red', padding:5, textAlign:'center', marginTop:10 }}>
                                {slotConfirmed.msg}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
