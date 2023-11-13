import React from 'react';

const ErrorPage = ({ message, onRetry }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Oops! Something went wrong</h1>
        <p style={styles.message}>{message}</p>
        {onRetry && (
          <button style={styles.button} onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    color: '#dc3545',
  },
  message: {
    fontSize: '1.2em',
    margin: '20px 0',
    color: '#6c757d',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ErrorPage;
