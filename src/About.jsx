import './App.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="portfolio-root">
      <div className="animated-bg"></div>
      <main className="portfolio-content">
        <header>
          <h1>About Me</h1>
          <nav style={{ marginTop: '1rem' }}>
            <Link to="/" style={{ color: '#b983ff', textDecoration: 'underline', marginRight: '1.5em' }}>Back to Portfolio</Link>
            <Link to="/resume" style={{ color: '#b983ff', textDecoration: 'underline' }}>Resume</Link>
          </nav>
        </header>
        <section className="about-section">
          <h2>Curiosity & Culture</h2>
          <p>
            I have a deep love for travel and a passion for learning about the world’s many cultures. Whether exploring new places or connecting with people from diverse backgrounds, I believe every experience is an opportunity to grow and broaden my perspective. This curiosity drives me to be open-minded, adaptable, and always eager to learn from others.
          </p>
        </section>
        <section className="about-section">
          <h2>Motorsports & Technology</h2>
          <p>
            I’m fascinated by motorsports and cutting-edge technology. The fast-paced, innovative spirit of these fields inspires me to stay up-to-date with the latest advancements and to approach challenges with creativity and enthusiasm. I enjoy tinkering with new tech and understanding how things work, both in and out of the workplace.
          </p>
        </section>
        <section className="about-section">
          <h2>Inclusivity & Open-Mindedness</h2>
          <p>
            My experiences in IT, logistics, and community management have taught me the value of inclusivity and respect for all individuals. I strive to create welcoming environments where everyone feels heard and valued, and I am committed to being politically correct and culturally sensitive in all interactions. I believe that embracing diversity leads to stronger teams and better outcomes.
          </p>
        </section>
        <section className="about-section">
          <h2>Continuous Learning</h2>
          <p>
            I am a lifelong learner, always seeking new knowledge and skills. Whether it’s mastering a new technology, understanding a different culture, or developing soft skills, I approach every opportunity with enthusiasm and humility. My goal is to contribute positively to any team and to help foster a culture of growth and acceptance.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About; 