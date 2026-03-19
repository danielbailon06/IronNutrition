import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>

      <p>
        This project is a React application developed as part of a learning
        exercise. It demonstrates the use of components, state management,
        lists, and React Router to navigate between pages.
      </p>

      <ul>
        <li>
          <strong>Daniel Bailón</strong>
          <br />
          <a href="https://github.com/danielbailon06" target="¨_blank">GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/daniel-bail%C3%B3n-buitrago-818b8a19b/" target="¨_blank">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage