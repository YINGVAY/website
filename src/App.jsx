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
              <strong>All Things Linux Staff Team</strong>: Former member of the staff team for All Things Linux (non-profit). Assisted with general operations, including moderation and basic mediation among all age groups.
            </li>
            <li>
              <strong>Personal Portfolio Website</strong>: Currently learning basic programming to further my career. This website is my key project at the moment.
            </li>
            <li>
              <strong>AI & Prompt Engineering Exploration</strong>: Developed a strong interest in the application of artificial intelligence for positive impact. Actively learning prompt engineering, experimenting with various large language models (LLMs), and exploring different AI libraries and tools to expand technical expertise.
            </li>
          </ul>
        </section>
        <section className="skills">
          <h2>Key Skills</h2>
          <ul className="skills-list">
            <li>Very organized</li>
            <li>Customer service oriented</li>
            <li>Soft Skills</li>
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
