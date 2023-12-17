import React from 'react'

export default function Error() {
    return (
        <div>
            <div className="error-container">
                <div className="error-content">
                    <h1 className="error-heading">Oops!</h1>
                    <p className="error-message">We encountered an error.</p>
                    <p className="error-description">The page you're looking for might have been removed or is temporarily unavailable.</p>
                    <a href="/" className="error-link">Go to Homepage</a>
                </div>
            </div>
        </div>
    )
}
