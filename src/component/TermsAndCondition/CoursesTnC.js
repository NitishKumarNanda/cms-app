import React from 'react'
import DataHolder from './DataHolder';
import coursesTnCData from './coursesTnC.json'


export default function CoursesTnC({courseID}) {
    const data=coursesTnCData[courseID];
  return (
    <div>
        <DataHolder data={data}/>
    </div>
  )
}
