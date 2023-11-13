import React from 'react'
import { Col, Row } from 'react-bootstrap'


export default function VideoContent() {
    const videoLinks = [
        { "id": 1, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (1).mp4" },
        { "id": 2, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (2).mp4" },
        { "id": 3, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (3).mp4" },
        { "id": 4, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (4).mp4" },
        { "id": 5, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (5).mp4" },
        { "id": 6, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (6).mp4" },
        { "id": 7, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (7).mp4" },
        { "id": 8, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (8).mp4" },
        { "id": 9, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (9).mp4" },
        { "id": 10, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (10).mp4" },
        { "id": 11, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (11).mp4" },
        { "id": 12, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (12).mp4" },
        { "id": 13, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (13).mp4" },
        { "id": 14, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (14).mp4" },
        { "id": 15, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (15).mp4" },
        { "id": 16, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (16).mp4" },
        { "id": 17, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (17).mp4" },
        { "id": 18, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (18).mp4" },
        { "id": 19, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (19).mp4" },
        { "id": 20, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (20).mp4" },
        { "id": 21, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (21).mp4" },
        { "id": 22, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (22).mp4" },
        { "id": 23, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (23).mp4" },
        { "id": 24, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (24).mp4" },
        { "id": 25, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (25).mp4" },
        { "id": 26, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (26).mp4" },
        { "id": 27, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (27).mp4" },
        { "id": 28, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (28).mp4" },
        { "id": 29, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (29).mp4" },
        { "id": 30, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (30).mp4" },
        { "id": 31, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (31).mp4" },
        { "id": 32, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (32).mp4" },
        { "id": 33, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (33).mp4" },
        { "id": 34, "name": false, "video": "https://www.placementsbymehta.com/demo/Images/VID (34).mp4" }
    ];
    return (
        <Row className="justify-content-center">
            {videoLinks.map((video, idx) => (
                <Col key={video.id} xs={12} sm={6} md={4} lg={4} style={{ padding: 20 }}>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            borderRadius: '30px',
                            cursor: 'pointer',
                        }}
                    >
                        <video
                            width="100%"
                            controls
                            style={{
                                borderRadius: '30px',
                                boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.8)',
                            }}
                        >
                            <source src={video.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
