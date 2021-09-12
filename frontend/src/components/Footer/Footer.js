import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
        <p>Copyright &copy; Web Report {new Date().getFullYear()}</p>
      </div>
    )
}
