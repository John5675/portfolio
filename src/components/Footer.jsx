import Icon from './Icon.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2026 John Huynh</span>
        <span className="dots" />
        <a href="mailto:johnhuynh238@gmail.com">
          <Icon name="mail" />Email
        </a>
        <a
          href="https://www.linkedin.com/in/johnhuynh238/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="li" />LinkedIn
        </a>
        <a
          href="https://github.com/John5675"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="gh" />GitHub
        </a>
        <span className="footer-tail muted">built &amp; hosted by me</span>
      </div>
    </footer>
  );
}
