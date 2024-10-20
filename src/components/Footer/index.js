import styles from "./Footer.module.css";

function Footer() {
   return (
    <footer className={styles.footer}>
      <div className={styles.footerBar}>
        <div className={styles.copyright}>
          <span>Copyright © 2024 Developed by </span>
          <span className={styles.active}>Eduardo Augusto</span>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/eduardoaugustopp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-brands fa-linkedin"></span>
                <span>Eduardo Augusto Paiva Pinto</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/eduardoaugustopp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-brands fa-github"></span>
                <span>@eduardoaugustopp</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:eduardo.augustopp@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-solid fa-envelope"></span>
                <span>eduardo.augustopp@hotmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
