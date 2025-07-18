import './App.css';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className="portfolio-root">
      <div className="animated-bg"></div>
      <main className="portfolio-content">
        <header>
          <h1>Deacon Henderson</h1>
          <p className="contact-info">Email: d.hendo308@gmail.com | Phone: 270-285-3479</p>
          <nav style={{ marginTop: '1rem' }}>
            <Link to="/" style={{ color: '#b983ff', textDecoration: 'underline' }}>Back to Portfolio</Link>
          </nav>
        </header>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>Versatile and driven professional with strong experience in IT, logistics, and personnel management. Proven ability to lead teams, manage operations, and implement technology solutions efficiently. Comfortable working in IT, operations, or HR environments. Strong communicator with a proactive attitude and deep technical knowledge.</p>
        </section>
        <section className="resume-section">
          <h2>Work Experience</h2>
          <div className="job">
            <h3>IT Technician</h3>
            <p><strong>Hills IT</strong> - Morganfield, KY<br/>Phone: (270) 952-0785<br/>Jan 2020 - Apr 2024</p>
            <ul>
              <li>Provided comprehensive support for Windows and Linux systems (Fedora, Debian, Ubuntu, and some NixOS)</li>
              <li>Performed system builds, hardware upgrades, and PSU replacements</li>
              <li>Troubleshot hardware/software issues across diverse environments</li>
              <li>Assisted in basic network configuration and troubleshooting</li>
              <li>Supported users remotely and in-person with technical issues</li>
            </ul>
          </div>
          <div className="job">
            <h3>All Things Linux Staff Team (Volunteer)</h3>
            <p><strong>All Things Linux</strong> (Non-profit, Remote)<br/>Former Staff Member</p>
            <ul>
              <li>Served as a staff member for a large Linux-focused online community.</li>
              <li>Assisted with general operations, including moderation and basic mediation among all age groups.</li>
              <li>Helped maintain a positive, inclusive environment for community members.</li>
              <li>Supported the non-profit's mission to educate and assist users of all experience levels.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Site Manager (Temporary Contract)</h3>
            <p><strong>UNITY Staffing</strong> - Evansville, IN<br/>Jun 2021 - Sep 2021</p>
            <ul>
              <li>Managed on-site operations for a rotating team of 15-20 employees</li>
              <li>Acted as liaison between staff and upper management</li>
              <li>Facilitated onboarding, training, scheduling, and conflict resolution</li>
              <li>Developed interpersonal and HR-adjacent skills such as employee evaluations and team coordination</li>
            </ul>
          </div>
          <div className="job">
            <h3>Logistics Manager / Receiver</h3>
            <p><strong>Tractor Supply Company (TSC)</strong><br/>Phone: (812) 428-3341</p>
            <ul>
              <li>Oversaw shipping/receiving operations, inventory handling, and documentation</li>
              <li>Managed incoming freight, verified invoices, and maintained accurate stock counts</li>
              <li>Trained and supervised other staff in warehouse safety and efficiency</li>
              <li>Supported store operations and collaborated closely with leadership</li>
            </ul>
          </div>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li><strong>High School Diploma - Electrical Focus</strong><br/>Victory Tech High School - Morganfield, KY<br/>Completed: 2019</li>
            <li><strong>Electricity Program</strong><br/>Earle C. Clements Job Corps Academy<br/>Completed: 2018</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Linux System Administration (Debian, Fedora, Ubuntu, NixOS)</li>
            <li>Windows OS Support</li>
            <li>Hardware Diagnostics & Repair</li>
            <li>Basic Networking</li>
            <li>Inventory & Logistics Software</li>
            <li>Remote IT Support</li>
            <li>Staff Supervision</li>
            <li>Conflict Resolution</li>
            <li>Employee Onboarding</li>
            <li>Scheduling</li>
            <li>Training & Development</li>
            <li>Team Coordination</li>
            <li>Operations Oversight</li>
            <li>I9 - finishing</li>
            <li>Very organized</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Resume; 