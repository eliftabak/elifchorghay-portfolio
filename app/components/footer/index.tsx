

const Footer = () => (
  <footer className="bg-gray-100 py-24 mt-40">
    <div className="contain">
      <div className="flex justify-between items-center text-mdgray">
        <p>© {new Date().getFullYear()} Elif Chorghay</p>
        <div>
          <a className="mr-10" href="https://github.com/eliftabak" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/elifchorghay/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
