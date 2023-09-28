import React from 'react'
import { Link } from 'react-router-dom'

const Language = () => {
  return (
    <div className="language-wrapper">
    <div className="dropdown dropdown-defult">
      {/* language change  */}
      <Link className="btn btn-secondary dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={"/"}>Hindi</Link></li>
        <li><Link className="dropdown-item" to={"/"}>English</Link></li>
        <li><Link className="dropdown-item" to={"/"}>Urdu</Link></li>
        <li><Link className="dropdown-item" to={"/"} style={{color: "#7A58E6"}}>Add New</Link></li>
      </ul>
    </div>
    <div className="dropdown dropdown-defult dot-dropdown">
      {/* add items  */}
      <Link className="btn btn-secondary dropdown-toggle dot-name" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false"> ...</Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={"/Page3"}>Add language</Link></li>
        <li><Link className="dropdown-item" to={"/page2"}>Create subject</Link></li>
        <li><Link className="dropdown-item" to={"/page4"}>Create topic</Link></li> 
        <li><Link className="dropdown-item" to={"/"}>Create subtopic</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Language
