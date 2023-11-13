import React, { useState } from 'react'

export default function ListItem({ data }) {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: 10 }}>
            <div onClick={() => { setShow(!show) }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    backgroundColor: "#ff0000",
                    padding: 10,
                    borderRadius: 10,
                    color:'white'
                }}>
                <h5 style={{ marginLeft: 10 }}> {data.items.title}</h5>
                <i className={show ? "bi bi-chevron-double-up" : "bi bi-chevron-double-down"} style={{marginRight:10}} />
            </div>
            <ul style={{
                listStyleType: 'none',
                marginTop: 10,
                display: show ? 'block' : 'none'
            }}>
                {
                    data.items.data.map((item, index) => (
                        <div style={{ padding: 2 }} key={index}>
                            <li 
                                className="grow-on-hover"
                                style={{
                                    backgroundColor: index % 2 === 0 ? '#ffcccc' : '#ffe6e6',
                                    padding: '10px',
                                    borderRadius: 10
                                }}>
                                <i style={{ marginLeft: 15 }}><b>{item.title}</b> : {item.data}</i>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
