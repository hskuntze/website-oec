import "./styles.css";

const Navbar = () => {
  return (
    <nav id="main-menu-navbar">
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a>
        <a href="/about" className="navbar-link">Sobre</a>
        <a href="/contact" className="navbar-link">Contato</a>
      </div>
    </nav>
  );
};

export default Navbar;
