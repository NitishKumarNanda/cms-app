import React from 'react'
import DataHolder from './DataHolder'
import PrivacyPolicyData from './PrivacyPolicy.json'

export default function PrivacyPolicy() {
    const data=PrivacyPolicyData
  return (
    <div>
        <DataHolder data={data}/>
    </div>
  )
}
