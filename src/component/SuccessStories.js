import React from 'react'
import { Container } from 'react-bootstrap'
import VideoContent from './SuccessStoriesComponent/VideoContent'
import ImagesBannerOnly from './Misc/ImagesBannerOnly'

export default function SuccessStories() {
  return (
    <div style={{ overflowY: 'auto', height: 'calc(100vh - 135px)' }}>
      <ImagesBannerOnly />
      <hr style={{ color: 'red', border: '3px solid red' }} />
      <h3 className='gradient-text glowing-text' style={{ textAlign: 'center' }}>Success Stories</h3>
      <hr style={{ color: 'red', border: '3px solid red' }} />
      <Container style={{ padding: 20 }}>
        <VideoContent />
      </Container>
    </div>
  )
}
