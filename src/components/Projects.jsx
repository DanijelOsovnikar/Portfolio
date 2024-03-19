import "./Projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-section">
        <div className="heading">
          <h2>Projects</h2>
          <button>Contact me</button>
        </div>
        <div className="projects-grid">
          <div className="project">
            <div className="thePlanets"></div>
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
            <div className="swipe"></div>
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
            <div className="coffeeRoasters"></div>
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
            <div className="github"></div>
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
