import "../styles/Home.css";

export default function Home() {
  return (
    <section className="Home" id="home">
      <div className="main">
        <div className="main-text-area">
          <h1>
            Full-Stack <br /> Developer
          </h1>
          <p>
            Hi, I am Ali Haider. A passionate Full-Stack Developer based in New
            Delhi, India.
          </p>
          <span className="icons">
            <a href="https://www.linkedin.com/in/alihaider0018/">
              <i class="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/alihaider0018">
              <i class="ri-github-line"></i>
            </a>
          </span>
        </div>
        <div className="main-img-area">
          <img src="profilepic.png" alt="profile" />
        </div>
      </div>

      <div className="skills">
        <h3>Tech Stack</h3>
        <p>|</p>
        <div className="skills-icon">
          <img src="https://skillicons.dev/icons?i=html,css,js" />
        </div>
        <div className="skills-icon">
          <img src="https://skillicons.dev/icons?i=react,mongodb,express" />
        </div>
      </div>
    </section>
  );
}
