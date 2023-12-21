import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';

export default function ResumeUpload({ url, handleDocumentName }) {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [uploadMsg, setUploadMsg] = useState({ status: 0, message: 'No file uploaded' });

  const handleDocumentChange = (e) => {
    const file = e.target.files[0];
    setSelectedDocument(file);
  };

  const handleDocumentUpload = async () => {
    // Perform upload logic using selectedDocument
    if (selectedDocument) {
      const formData = new FormData();
      formData.append('document', selectedDocument);

      // Example: Send formData using axios or fetch to your server
      await axios.post(url + 'uploadDocument', formData).then(response => {
        setUploadMsg(response.data);
        handleDocumentName(response.data);
      }).catch(error => {
        console.error('Error uploading document:', error);
      });

      // For demonstration purposes, logging the file information
      console.log('Selected document:', selectedDocument);
    } else {
      console.log('Please select a document first.');
    }
  };

  return (
    <>
      <Container style={{ border: '1px solid black' }}>
        <Row>
          <Col>
            <div style={{ minHeight: 170 }}>
              <h4> Upload your Resume</h4>
              <div style={{ border: '1px solid grey', borderRadius: 3 }}>
                <input
                  id="documentUploader"
                  type='file'
                  label="Choose a document"
                  accept=".pdf,.doc,.docx"
                  onChange={handleDocumentChange}
                />
              </div><br />
              <Button onClick={handleDocumentUpload}>Upload</Button>
              {
                (uploadMsg.status === 400 || uploadMsg.status === 500) &&
                <div style={{ padding: 20, color: 'red' }}>
                  <p>{uploadMsg.message}</p>
                </div>
              }
              {
                uploadMsg.status === 200 &&
                <div style={{ padding: 20, color: 'green' }}>
                  <p>{uploadMsg.message}</p>
                </div>
              }
            </div>
          </Col>
          <Col>
            <div style={{ minHeight: 170 }}>
              {selectedDocument && (
                <>
                  <h5>Selected Document Preview:</h5>
                  <p>{selectedDocument.name}</p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
