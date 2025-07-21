import './App.css'

function App() {
  return (
    <div className="portfolio-root">
      <div className="animated-bg"></div>
      <main className="portfolio-content">
        <header>
          <h1>Deacon Henderson</h1>
          <p className="contact-info">Email: d.hendo308@gmail.com | Phone: 270-285-3479</p>
          <nav style={{ marginTop: '1rem' }}>
            <a href="/resume" className="nav-link">Resume</a>
            <a href="/about" className="nav-link">About Me</a>
          </nav>
        </header>
        <section className="about">
          <h2>About Me</h2>
          <p>I'm a passionate and dedicated worker who truly enjoys new technologies and learning new things. I am currently broadening my skills with Linux and basic programming. I have extensive knowledge of hardware and experience building and repairing computers. I also have a background in management and customer service. I would love to work in the tech industry and continue learning more about the field.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>All Things Linux Staff Team</strong>: Served as a staff member for a large Linux-focused online community from January 2023 to June 2024. Developed strong conflict resolution and community management skills through moderating discussions, providing technical guidance to users of varying experience levels, and facilitating collaborative problem-solving. This experience enhanced my communication abilities, cultural sensitivity, and capacity to maintain inclusive environments while supporting users across diverse technical backgrounds.
            </li>
            <li>
              <strong>Personal Portfolio Website</strong>: Built this responsive React-based portfolio to showcase my technical skills and professional experience. Implemented modern web technologies including Vite, React Router, and custom CSS with glassmorphism effects. Currently learning JavaScript and web development fundamentals to upskill and transition into software development roles.
            </li>
            <li>
              <strong>Custom PC Build & Linux Lab</strong>: Assembled multiple custom computer systems for personal use and learning environments. Set up multi-boot configurations with various Linux distributions (Fedora, Ubuntu, Debian) for hands-on system administration practice. This project strengthened my hardware troubleshooting skills and deepened my understanding of different Linux environments and package management systems.
            </li>
          </ul>
        </section>
        <section className="skills">
          <h2>Key Skills</h2>
          <ul className="skills-list">
            <li>Very organized</li>
            <li>Customer service oriented</li>
            <li>PC Building & Assembly</li>
            <li>Hardware Diagnostics & Repair</li>
            <li>Component Installation & Upgrades</li>
            <li>IT Support & Troubleshooting</li>
          </ul>
        </section>
        <footer>
          <div className="socials">
            <a href="https://github.com/YINGVAY" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="mailto:d.hendo308@gmail.com">Email</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
