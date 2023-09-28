import React from 'react'
import { Link } from 'react-router-dom';

const DropDown = ({dropdownName,listArray, classList, adddetailsId }) => {

  return (
    <div className="dropdown dropdown-defult" id={adddetailsId}>
            <Link className="btn btn-secondary dropdown-toggle inner-select" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dropdownName}
            </Link>
            {/* all dropdown items display using map function */}
            <ul className="dropdown-menu" id={classList}>
                {listArray.map((itemVal, index) => (
                    <li key={index}>
                    <Link className="dropdown-item" to={"/"}>{itemVal}</Link>
                    </li>
                ))}
                 <li><Link className="dropdown-item add-item" to={"/"}>Add {dropdownName}</Link></li>
            </ul>
        </div>
  )
}

export default DropDown;



