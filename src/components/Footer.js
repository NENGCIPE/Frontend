import React, { useEffect, useState } from 'react';
import './Footer.css'

function Footer() {
    return (
      <footer>
        <div className="left-content">
          &copy; Team 한사랑산학회
        </div>
        <div className="right-content">
          이용약관 <span className="separator">|</span> 개인정보보호정책 <span className="separator">|</span> NENGCIPE소개
        </div>
      </footer>
    );
  }
  
  export default Footer;