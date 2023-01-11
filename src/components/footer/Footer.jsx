import React from 'react'
import "./Footer.scss";
const Footer = () => {
  const date = new Date();
const year = date.getFullYear();
  return (
    <div className="footer">

&copy; {year} All Rights Reserved
    </div>
  )
}

export default Footer