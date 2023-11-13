import React from 'react'
import ImageBanner from '../Images/DSC2381.JPG'
import { Image } from 'react-bootstrap'

export default function ImagesBannerOnly() {
  return (
    <>
        <Image
      src={ImageBanner}
      alt="Image"
      className="img-fluid"
    />
    </>
  )
}
