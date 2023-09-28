import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <Link to='/'>
        <h3>Page Not Found</h3>
        <p>Home</p>
      </Link>
    </div>
  )
}

export default ErrorPage
