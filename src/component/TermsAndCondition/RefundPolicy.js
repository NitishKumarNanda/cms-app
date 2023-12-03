import React from 'react'
import RefundPolicyData from './RefundPolicyFact.json'
import DataHolder from './DataHolder';


export default function RefundPolicy() {
    const data=RefundPolicyData;
  return (
    <div>
        <DataHolder data={data}/>
    </div>
  )
}
