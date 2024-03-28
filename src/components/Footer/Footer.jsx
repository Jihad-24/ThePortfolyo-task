const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="credit">
      {" "}
      © copyright {currentYear} by <span>Jihad Hasan</span>
    </div>
  );
};

export default Footer;
