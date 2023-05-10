import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
   <nav>
    <h1><strong>MetaMan</strong></h1>
    <main>
      <Link to={'/#home'}>Home</Link>
      <Link to={'/Contact'}>Contact</Link>
      <HashLink to={'/#About'}>About</HashLink>
      <HashLink to={'/#brands'}>Brands</HashLink>
      <Link to={'/service'}>Service</Link>
    </main>
   </nav>
  )
}

export default Header