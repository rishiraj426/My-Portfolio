function Navbar() {
  return (
    <nav style={{ background: "#111", padding: "1rem", position: "sticky", top: 0 }}>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", justifyContent: "center", margin: 0 }}>
        <li><a href="#hero" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
        <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
        <li><a href="#skills" style={{ color: "#fff", textDecoration: "none" }}>Skills</a></li>
        <li><a href="#education" style={{ color: "#fff", textDecoration: "none" }}>Education</a></li>
        <li><a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a></li>
        <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
