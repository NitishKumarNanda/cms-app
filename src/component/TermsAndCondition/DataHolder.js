import React from 'react'

export default function DataHolder({ data }) {
  return (
    <div style={{ marginLeft: 20 }}>
      <h6>{data.title}</h6>
      {
        data.data.length > 0 ?
          <>
            {
              data.data[0].id ?
                <>
                  {data.data.map((data, idx) => (
                    <DataHolder key={idx} data={data} />
                  ))}
                </>
                :
                <ul>
                  {data.data.map((ele, idx) => <li key={idx}>{ele}</li>)}
                </ul>
            } 
          </>
          :
          <h5>{data.data}</h5>
      }
    </div>
  )
}
