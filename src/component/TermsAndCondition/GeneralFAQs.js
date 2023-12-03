import React from 'react'
import GeneralFactData from './GeneralFact.json'
import DataHolder from './DataHolder';


export default function GeneralFAQs() {
    const data=GeneralFactData;
  return (
    <div>
        <DataHolder data={data}/>
    </div>
  )
}
