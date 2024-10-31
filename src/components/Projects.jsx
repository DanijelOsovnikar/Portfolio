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
            <input
              type="checkbox"
              name="showHide6"
              id="showHide6"
              className="showHide"
              hidden
            />
            <label htmlFor="showHide6" className="gigatronDiv">
              <div className="project-info" style={{ right: "25px" }}>
                <h3>Gigatron Project</h3>
                <a href="https://gigatron-project.netlify.app/" target="_blank">
                  VIEW PAGE
                </a>
                {/* <a
                  href="https://github.com/DanijelOsovnikar/Taxi-app"
                  target="_blank"
                >
                  VIEW SOURCE CODE
                </a> */}
              </div>
            </label>
            <img src="assets/gigatronMobile.png" className="gigatron" />
            <div className="infoSection">
              <h3>Gigatron Project</h3>
              <a href="https://gigatron-project.netlify.app/" target="_blank">
                VIEW PAGE
              </a>
              {/* <a
                href="https://github.com/DanijelOsovnikar/Taxi-app"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a> */}
            </div>
          </div>

          <div className="project">
            <input
              type="checkbox"
              name="showHide5"
              id="showHide5"
              className="showHide"
              hidden
            />
            <label htmlFor="showHide5" className="taxiDiv">
              <div className="project-info">
                <h3>Taxi app</h3>
                <a
                  href="https://danijelosovnikar.github.io/Taxi-app/"
                  target="_blank"
                >
                  VIEW PAGE
                </a>
                <a
                  href="https://github.com/DanijelOsovnikar/Taxi-app"
                  target="_blank"
                >
                  VIEW SOURCE CODE
                </a>
              </div>
            </label>
            <img src="assets/taxiAppMobile.png" className="taxi" />
            <div className="infoSection">
              <h3>Taxi app</h3>
              <a
                href="https://danijelosovnikar.github.io/Taxi-app/"
                target="_blank"
              >
                VIEW PAGE
              </a>
              <a
                href="https://github.com/DanijelOsovnikar/Taxi-app"
                target="_blank"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>

          <div className="project">
            <input
              type="checkbox"
              name="showHide1"
              id="showHide1"
              className="showHide"
              hidden
            />
            <label htmlFor="showHide1" className="thePlanetsDiv">
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
            </label>
            <img src="assets/planetsMobile.png" className="thePlanets" />
            <div className="infoSection">
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
            <input
              type="checkbox"
              name="showHide2"
              id="showHide2"
              className="showHide"
              hidden
            />
            <label htmlFor="showHide2" className="swipeDiv">
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
            </label>
            <img src="assets/swipeMobile.png" className="swipe" />
            <div className="infoSection">
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
            <input
              type="checkbox"
              name="showHide3"
              id="showHide3"
              className="showHide"
              hidden
            />
            <label htmlFor="showHide3" className="coffeeRoastersDiv">
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
            </label>
            <img src="assets/coffeeMobile.png" className="coffeeRoasters" />
            <div className="infoSection">
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
            <input
              type="checkbox"
              name="showHide4"
              id="showHide4"
              className="showHide"
              hidden
            />
            <label htmlFor="showHide4" className="githubDiv">
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
            </label>
            <img src="assets/devMobile.png" className="github" />
            <div className="infoSection">
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
