import React from 'react'
import styles from "./navbar.module.css"
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLinks from '../AuthLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div>Name of Blog</div>
        <ThemeToggle />
        <AuthLinks />
    </div>
  )
}

export default Navbar;