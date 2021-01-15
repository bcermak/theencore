import React from "react";
import StickyFooter from 'react-sticky-footer';
import './style.css'


function Footer() {
  return <div className="container"><div className="footer"><StickyFooter
  bottomThreshold={50}
  normalStyles={{
  backgroundColor: "black",
  padding: "2rem"
  }}
  stickyStyles={{
  backgroundColor: "rgba(255,255,255,.8)",
  padding: "2rem"
  }}
>
  <p style={{color: 'white', textAlign: 'center'}}> Lorem Ipsum </p>
</StickyFooter>
</div>
</div>
}

export default Footer;