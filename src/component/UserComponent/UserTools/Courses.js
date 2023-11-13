import React, { useState } from 'react'
import BookMeeting from './BookMeeting';
import ListMeeting from './ListMeeting';


export default function Courses() {
  const [refreshData,setRefreshData] = useState(0);
  const updateData = ()=>{
    setRefreshData((prevKey)=>prevKey+1)
  }
  return (
    <>
      <BookMeeting updateData={{updateData}}/>
      <ListMeeting key={refreshData}/>
    </>
  )
}
