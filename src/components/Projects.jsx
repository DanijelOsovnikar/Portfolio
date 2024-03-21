import "./Projects.scss";

export default function Projects({ onClick }) {
  const clickHandler = () => {
    onClick();
  };
  return (
    <div className="projects">
      <div className="projects-section">
        <div className="heading">
          <h2>Projects</h2>
          <button onClick={clickHandler}>Contact me</button>
        </div>
        <div className="projects-grid">
          <div className="project">
            <div className="thePlanetsDiv"></div>
            <img src="assets/planetsMobile.png" className="thePlanets" />
            <div className="project-info">
              <h3>The Planets</h3>
              <a
                href="https://danijelosovnikar.github.io/The-Planets/"
                target="_blank"
              >
                VIEW PAGE
              </a>
              <a
                href="https://github.com/DanijelOsovnikar/The-Planets"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>
          <div className="project">
            <div className="swipeDiv"></div>
            <img src="assets/swipeMobile.png" className="swipe" />
            <div className="project-info">
              <h3>Swipe</h3>
              <a
                href="https://danijelosovnikar.github.io/Swipe/"
                target="_blank"
              >
                VIEW PAGE
              </a>
              <a
                href="https://github.com/DanijelOsovnikar/Swipe"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>
          <div className="project">
            <div className="coffeeRoastersDiv"></div>
            <img src="assets/coffeeMobile.png" className="coffeeRoasters" />
            <div className="project-info">
              <h3>coffeeRoasters</h3>
              <a
                href="https://danijelosovnikar.github.io/CoffeeRoasters/"
                target="_blank"
              >
                VIEW PAGE
              </a>
              <a
                href="https://github.com/DanijelOsovnikar/CoffeeRoasters"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>
          <div className="project">
            <div className="githubDiv"></div>
            <img src="assets/devMobile.png" className="github" />
            <div className="project-info">
              <h3>devFinder</h3>
              <a
                href="https://danijelosovnikar.github.io/GitHub-User-Search-App/"
                target="_blank"
              >
                VIEW PAGE
              </a>
              <a
                href="https://github.com/DanijelOsovnikar/GitHub-User-Search-App"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
