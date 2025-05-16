import React from 'react'

const NotFound = () => {
  return (
    <div className="container text-center py-5">
    <h1 className="display-1">404</h1>
    <h2 className="mb-3">Page Not Found</h2>
    <p className="lead">The page you are looking for doesn't exist or has been moved.</p>
    <a href="/" className="main-btn btn-white mt-3">Go Home</a>
  </div>
  )
}

export default NotFound