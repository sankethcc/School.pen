import React from 'react'
import bell  from '../assets/bell.png'
import profile from '../assets/profile.png'

const ProfileWrapper = ({toggleMenu, close}) => {
  return (
    <div className="profile-wrapper">
              <h3>Create quiz</h3>
              <div className="profile-box">
                <div>
                  <img className="info-header" src={bell} alt="" />
                </div>
                <img className="profile-logo" src={profile} alt="" />
                <div className={`hamburger ${close}`}  onClick={toggleMenu}>
                  <span></span>
                  <span className='hide'></span>
                  <span></span>
                </div>
              </div>
            </div>
  )
}

export default ProfileWrapper
