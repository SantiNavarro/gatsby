import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyes from './header.module.scss'

const Header = () =>{
    const data = useStaticQuery(graphql`
      query{
          site{
              siteMetadata{
                  title
              }
          }
      }  
    `)

    
    return(
        <header className={headerStyes.header}>
            <h1><Link to="/" className={headerStyes.title}>{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={headerStyes.navList}>
                    <li><Link activeClassName={headerStyes.activeNavItem} to="/" className={headerStyes.navItem}>Home</Link></li>
                    <li><Link activeClassName={headerStyes.activeNavItem} to="/about" className={headerStyes.navItem}>About</Link></li>
                    <li><Link activeClassName={headerStyes.activeNavItem} to="/contact" className={headerStyes.navItem}>Contact</Link></li>
                    <li><Link activeClassName={headerStyes.activeNavItem} to="/blog" className={headerStyes.navItem}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;