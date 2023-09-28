import React from 'react'
import edits  from '../assets/edit.png'

const SideDetails = () => {
  return (
    <div className="side-details">
      <div className="amout-wrapper">
        <p className="price-heading">Total quiz</p>
        <p className="price-count">50,000</p>
      </div>
      <h3>Preview</h3>
      <div className='preview-question'>
        <img src={edits} className='edit-logo' alt="" />
        <p>Tadoba national park known for sheltering tiger, panther and bear is located in: </p>
        <ul>
          <li>Assam</li>
          <li>Chandrapur</li>
          <li>Karnataka</li>
          <li>Tamil Nadu</li>
        </ul>
      </div>
      <div className='preview-question'>
        <img src={edits} className='edit-logo' alt="" />
        <div>
          <img src="" alt="" />
          <p>Tadoba national park known for sheltering tiger, panther and bear is located in: </p>
          <ul>
            <li>Assam</li>
            <li>Chandrapur</li>
            <li>Karnataka</li>
            <li>Tamil Nadu</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default SideDetails
