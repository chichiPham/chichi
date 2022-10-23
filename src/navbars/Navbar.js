import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
function navbar() {
  return (
    <>
      <div className='navbar'>
        <Link to="#" className="menu-bars">
         <FaIcons.FaBars/>
        </Link>
      </div>
    </>
  )
}

export default navbar;
