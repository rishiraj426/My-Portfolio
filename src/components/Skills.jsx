function Skills() {
  return (
    <section id="skills" style={{ padding: "2rem" }}>
      <h2>Skills</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>

        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>UI/UX</li>
          </ul>
        </div>

        <div>
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>REST APIs</li>
            <li>Microservices</li>
            <li>API Gateway</li>
            <li>JBoss</li>
          </ul>
        </div>

        <div>
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>PLSQL</li>
            <li>DBeaver</li>
          </ul>
        </div>

        <div>
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>AWS Certified DevOps Professional</li>
            <li>Lambda</li>
            <li>Jenkins</li>
            <li>CI/CD (GitHub Actions)</li>
          </ul>
        </div>

        <div>
          <h3>Tools & Utilities</h3>
          <ul>
            <li>Postman</li>
            <li>WinSCP</li>
            <li>PuTTY</li>
            <li>Eclipse</li>
            <li>VS Code</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
