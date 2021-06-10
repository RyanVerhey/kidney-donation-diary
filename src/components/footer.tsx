import * as React from 'react';

const Footer = () => {
  return (
    <footer>
      <section id="contact">
        If you want to reach out for (almost) any reason, feel free to email me at <a href="mailto:ryan@kidneydonationdiary.com" target="_blank">ryan@kidneydonationdiary.com</a>
      </section>
      <section id="copyright">
        &copy; <script>document.write(new Date().getFullYear())</script> <a href="https://ryanverhey.com" target='_blank'>Ryan Verhey</a>
      </section>
    </footer>
  );
}

export default Footer;
