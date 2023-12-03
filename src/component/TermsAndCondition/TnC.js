import React from 'react'
import TnCFactData from './TnCFact.json'
import DataHolder from './DataHolder';


export default function TnC() {
    const data=TnCFactData;

  return (
    <div>
        <DataHolder data={data}/>
    </div>
  )
}
