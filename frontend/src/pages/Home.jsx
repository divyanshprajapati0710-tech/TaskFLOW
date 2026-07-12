import { Link } from "react-router-dom";
import {
  FaTasks,
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}

      <nav className="home-navbar">

        <div className="logo">
          <FaTasks />
          <h2>TaskFLOW</h2>
        </div>

        <div className="nav-links">
          <Link to="/login">Login</Link>

          <Link className="register-btn" to="/register">
            Register
          </Link>
        </div>

      </nav>

      {/* Hero */}

      <section className="hero">

        <h1>
          Organize Your Work <br />
          <span>Boost Your Productivity</span>
        </h1>

        <p>
          TaskFLOW helps you manage daily tasks, stay organized,
          and improve productivity with a clean and secure
          task management system.
        </p>

        <div className="hero-buttons">

          <Link to="/register" className="primary-btn">
            Get Started
            <FaArrowRight />
          </Link>

          <Link to="/login" className="secondary-btn">
            Login
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">

          <FaTasks className="feature-icon" />

          <h3>Task Management</h3>

          <p>
            Create, edit and delete tasks with ease.
          </p>

        </div>

        <div className="feature-card">

          <FaShieldAlt className="feature-icon" />

          <h3>Secure Login</h3>

          <p>
            JWT Authentication keeps your data protected.
          </p>

        </div>

        <div className="feature-card">

          <FaRocket className="feature-icon" />

          <h3>Fast Performance</h3>

          <p>
            Built using the MERN Stack for speed.
          </p>

        </div>

        <div className="feature-card">

          <FaMobileAlt className="feature-icon" />

          <h3>Responsive</h3>

          <p>
            Works beautifully on desktop, tablet and mobile.
          </p>

        </div>

      </section>

      {/* CTA */}

<section className="cta">

  <div className="cta-card">

    <h2>Ready to Stay Organized?</h2>

    <p>
      Create your free account today and start managing your
      tasks like a professional.
    </p>

    <Link className="cta-btn" to="/register">
      🚀 Create Free Account
    </Link>

  </div>

</section>

      {/* Footer */}

      <footer className="footer">
        © 2026 TaskFLOW • Built with React, Node.js, Express & MongoDB
      </footer>

    </div>
  );
}

export default Home;