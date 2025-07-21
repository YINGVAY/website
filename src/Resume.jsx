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
            <Link to="/" className="nav-link">Back to Portfolio</Link>
          </nav>
        </header>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>Experienced people leader and operations manager with proven expertise in employee relations, staff development, and organizational management. Strong background in conflict resolution, team coordination, and creating inclusive work environments across diverse teams. Combines excellent interpersonal skills with technical knowledge and operational efficiency. Comfortable working in HR, operations, or management roles where people skills and organizational leadership are essential.</p>
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
          <div className="job">
            <h3>All Things Linux Staff Team (Volunteer)</h3>
            <p><strong>All Things Linux</strong> (Non-profit, Remote)<br/>Jan 2023 - Jun 2024<br/>Contact: Logan Honeycut (Owner)<br/>Email: logan@allthingslinux.org<br/>Phone: 704-804-9020</p>
            <ul>
              <li>Served as a staff member for a large Linux-focused online community with thousands of members.</li>
              <li>Developed advanced conflict resolution and mediation skills managing disputes between community members of all experience levels and age groups.</li>
              <li>Provided technical guidance and mentorship to users ranging from beginners to advanced Linux practitioners.</li>
              <li>Enhanced communication and cultural sensitivity skills while maintaining an inclusive, welcoming environment for diverse community members.</li>
              <li>Supported the non-profit's educational mission through community engagement and user assistance.</li>
            </ul>
          </div>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li><strong>High School Diploma - Electrical Focus</strong><br/>Victory Tech High School - Morganfield, KY<br/>Completed: 2019<br/><em>Specialized coursework in electrical systems, circuit analysis, and hands-on electrical installation techniques. Developed foundational understanding of electrical safety protocols, wiring standards, and troubleshooting methodologies that complement current IT hardware expertise.</em></li>
            <li><strong>Electricity Program</strong><br/>Earle C. Clements Job Corps Academy<br/>Completed: 2018<br/><em>Comprehensive training in residential and commercial electrical systems, including motor controls, power distribution, and electrical code compliance. Gained practical experience with multimeters, oscilloscopes, and diagnostic equipment. Developed strong problem-solving skills and attention to detail essential for technical roles.</em></li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Staff Supervision & Management</li>
            <li>Employee Relations & Conflict Resolution</li>
            <li>Employee Onboarding & Training</li>
            <li>Team Coordination & Leadership</li>
            <li>Scheduling & Workforce Planning</li>
            <li>Employee Evaluations & Performance Management</li>
            <li>Cultural Sensitivity & Inclusivity</li>
            <li>Operations Oversight</li>
            <li>Very organized</li>
            <li>Linux System Administration (Debian, Fedora, Ubuntu, NixOS)</li>
            <li>Windows OS Support</li>
            <li>Hardware Diagnostics & Repair</li>
            <li>Basic Networking</li>
            <li>Inventory & Logistics Software</li>
            <li>Remote IT Support</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Resume; 