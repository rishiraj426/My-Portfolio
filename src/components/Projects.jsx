function Projects() {
  return (
    <section id="projects" style={{ padding: "2rem" }}>
      <h2>Projects</h2>

      <h3>Academic Projects</h3>
      <ul>
        <li>
          <strong>Hospital Management System</strong> – Spring Boot + JPA, MySQL
          <br />REST APIs for patients, doctors, appointments
        </li>
        <li>
          <strong>Portfolio Website</strong> – React + Vite
          <br />Responsive personal portfolio showcasing skills & projects
        </li>
      </ul>

      <h3>Professional Projects</h3>
      <ul>
        <li>
          <strong>TCS BaNCS – Enterprise Health Insurance Project</strong> – Java, Spring , Jenkins, JBoss, PLSQL
          <br />Developed & profiled REST APIs, fixed backend issues, optimized database queries, configured JBoss, automated deployments via Jenkins, and provided 24×7 production support
        </li>
      </ul>

    </section>
  );
}

export default Projects;
