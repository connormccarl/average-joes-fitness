import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout-mobile.module.css'

const MobileLayout = ({ children }) => {
  return (
    <div className={container}>
      <header>Average Joes Fitness</header>
      <main>
        {children}
      </main>
      <footer>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to='/' className={navLinkText}>Home</Link></li> 
            <li className={navLinkItem}><Link to='/workout' className={navLinkText}>Workout</Link></li> 
            <li className={navLinkItem}><Link to='/progress' className={navLinkText}>Progress</Link></li> 
          </ul>
        </nav> 
      </footer> 
    </div>
  )
}

export default MobileLayout