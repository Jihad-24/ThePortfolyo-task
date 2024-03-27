const SideNav = () => {
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars" />
      <a href="#home" className="logo">
        Portfolio
      </a>
      <nav className="navbar  overflow-y-auto">
        <a href="#home" className="active">
          home
        </a>
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#services">services</a>
        <a href="#timeline">timeline</a>
        <a href="#portfolio">projects</a>
        <a href="#testimonials">testimonials</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="follow">
        <a
          href="https://www.facebook.com/fb.Jihad.Hasan"
          target="_blank"
          className="fab fa-facebook-f"
        />
        <a
          href="https://www.instagram.com/mdjihad1221/"
          target="_blank"
          className="fab fa-instagram"
        />
        <a
          href="https://www.linkedin.com/in/jihad-hasan/"
          target="_blank"
          className="fab fa-linkedin"
        />
        <a
          href="https://github.com/Jihad-24"
          target="_blank"
          className="fab fa-github"
        />
      </div>
    </header>
  );
};

export default SideNav;
