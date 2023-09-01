import React from 'react'
import './header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className='Container'>
            <h1>Co</h1>
            <FontAwesomeIcon icon={faUser} size='lg' />
        </div>
    )
}

export default Header