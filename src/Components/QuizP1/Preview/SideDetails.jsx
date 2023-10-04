import React from 'react'
import edits  from '../assets/edit.png'
import {State} from "../../Context/Provider"

const SideDetails = ({ heading, number }) => {
  const {prevnote, setprevnote } = State();
  return (
    <div className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{number}</p>
      </div>
      <h3>Preview</h3>
      <div className='preview-question'>
        <img src={edits} className='edit-logo' alt="" />
        <p>Tadoba national park known for sheltering tiger, panther and bear is located in: </p>
        <ul>
          <li>Assam1</li>
          <li>Chandrapur</li>
          <li>Karnataka</li>
          <li>Tamil Nadu</li>
        </ul>
      </div>
      <div className='preview-question'>
        <img src={edits} className='edit-logo' alt="" />
        <div>
          <img className='' src="" alt="" />
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
