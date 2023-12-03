import React from 'react'
import DataHolder from './DataHolder'
import ShippingFactData from './ShippingFact.json'


export default function ShippingAndDeliveryPolicy() {
  const data=ShippingFactData;
  return (
    <div>
        <DataHolder data={data}/>
    </div>
  )
}
