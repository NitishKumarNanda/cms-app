
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import URLContext from '../../URLContext';

export default function ImageUpload(){
  const { url } = useContext(URLContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Do additional validations if needed before setting the image
    setSelectedImage(file);
  };

  const handleImageUpload = async() => {
    // Perform upload logic using selectedImage
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Example: Send formData using axios or fetch to your server
      await axios.post(url+'upload', formData).then(response => {
        console.log('Image uploaded!', response);
      }).catch(error => {
        console.error('Error uploading image:', error);
      });

      // For demonstration purposes, logging the file information
      console.log('Selected image:', selectedImage);
    } else {
      console.log('Please select an image first.');
    }
  };

  return (
    <>
      <Container>
      <Row>
        <Col>
          <div style={{ height: 170 }}>
            <h2>Profile Image</h2>
              <br/>
              <div style={{border:'1px solid grey', borderRadius:3}}>
              <input
                id="imageUploader"
                type='file'
                label="Choose an image"
                accept="image/*"
                onChange={handleImageChange}
              />
              </div>
            <br />
            <Button onClick={handleImageUpload}>Upload</Button>
          </div>
        </Col>
        <Col>
          <div style={{ height: 170 }}>
            {selectedImage && (
              <>
                <h5>Selected Image Preview:</h5>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ maxWidth: '300px', height: '80%' }}
                />
              </>
            )}
          </div>
        </Col>
      </Row>
      </Container>
    </>
  );
};
