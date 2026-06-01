function Navbar() {
  return (
    <nav style={{padding:"1rem", background:"#222", color:"#fff"}}>
      <h1>My Portfolio</h1>
      <ul style={{listStyle:"none", display:"flex", gap:"1rem"}}>
        <li><a href="#hero" style={{color:"#fff"}}>Home</a></li>
        <li><a href="#about" style={{color:"#fff"}}>About</a></li>
        <li><a href="#projects" style={{color:"#fff"}}>Projects</a></li>
        <li><a href="#contact" style={{color:"#fff"}}>Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
