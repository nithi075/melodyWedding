import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">THE MELDY WEDDINGS</h2>
        <a href="mailto:hello@the_melody_weddings.com" className="footer-contact">
          HELLO@THE_MELDY_WEDDINGS.COM
        </a>
        <div className="social-links">
          <a href="https://www.instagram.com/the_melody_weddings/" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <a href="https://www.pinterest.com/the_melody_weddings/" target="_blank" rel="noopener noreferrer">
            PINTEREST
          </a>
          <a href="https://www.vimeo.com/the_melody_weddings" target="_blank" rel="noopener noreferrer">
            VIMEO
          </a>
        </div>
        <p className="copyright">© 2026 THE MELDY WEDDINGS. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;