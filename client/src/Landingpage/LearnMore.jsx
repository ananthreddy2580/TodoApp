import LandingNavbar from "./LandingNavbar.jsx";

function LearnMore() {
  return (
    <>
      <div className="learn-more-page">
        <nav className="navbar">
          <LandingNavbar />
        </nav>
        <div className="learn-more-page1">
        <header className="learn-more-header">
          <h1>Learn More About Our Features</h1>
          <p>Discover how our To-Do app can transform your productivity</p>
        </header>

        <section className="learn-more-content">
          <div className="feature-detail">
            <h2>Advanced Task Management</h2>
            <p>Our task management system allows you to:</p>
            <ul>
              <li>Create and organize tasks with ease</li>
              <li>Set priorities and deadlines</li>
              <li>Track progress in real-time</li>
              <li>Collaborate with team members</li>
            </ul>
          </div>

          <div className="feature-detail">
            <h2>Smart Reminders</h2>
            <p>Never miss an important deadline with:</p>
            <ul>
              <li>Customizable notification settings</li>
              <li>Email and push notifications</li>
              <li>Recurring task reminders</li>
              <li>Priority-based alerts</li>
            </ul>
          </div>

          <div className="feature-detail">
            <h2>Powerful Organization</h2>
            <p>Keep your tasks organized with:</p>
            <ul>
              <li>Custom categories and tags</li>
              <li>Smart filters and search</li>
              <li>Multiple view options</li>
              <li>Progress tracking</li>
            </ul>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
