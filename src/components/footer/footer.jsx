<<<<<<< HEAD
import './Footer.css';
=======
import "./footer.css";
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  
  const currentYear = new Date().getFullYear();
>>>>>>> e68762a38603c19e98a222fc313ea7798b938458

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">DEVI PHOTOGRAPHY</h2>
        <a href="mailto:hello@deviphotography.com" className="footer-contact">
          HELLO@DEVI PHOTOGRAPHY.COM
        </a>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">PINTEREST</a>
          <a href="#">VIMEO</a>
        </div>
        <p className="copyright">© 2026 DEVI PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
=======
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section: Brand Statement */}
        <div className="footer-top">
          <h1 className="footer-logo">Golden Lights Photography</h1>
          <p className="footer-slogan">Capturing timeless stories with elegance.</p>
        </div>

        {/* Middle Section: Links & Socials */}
        <div className="footer-middle">
          <div className="footer-social-links">
            <a href="https://www.instagram.com/goldenlights_photography/" target="_blank" rel="noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/91709226986" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="mailto:hello@jeevaphotography.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-copyright">
            <p>© {currentYear} Golden Lights Photography. Crafted with Love.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
>>>>>>> e68762a38603c19e98a222fc313ea7798b938458
