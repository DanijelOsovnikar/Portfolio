import "./Projects.scss";

export default function Projects({ onClick }) {
  const clickHandler = () => {
    onClick();
  };

  const projectOpening = (e) => () => {
    if (e === "thePlanets") {
      document.getElementById("planetsId").style = {
        transform: "translateX(0)",
      };
      console.log(document.getElementById("planetsId"));
    }
    if (e === "swipe") {
    }
    if (e === "coffeeRoasters") {
    }
    if (e === "github") {
    }
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
            <h2>Work in progress</h2>
            <video controls>
              <source src="assets/gigatronProject.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="project">
            <h2>Finished projects</h2>
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
            <img
              src="assets/planetsMobile.png"
              className="thePlanets"
              onClick={projectOpening("thePlanets")}
            />
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
            <img
              src="assets/swipeMobile.png"
              className="swipe"
              onClick={projectOpening("swipe")}
            />
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
            <img
              src="assets/coffeeMobile.png"
              className="coffeeRoasters"
              onClick={projectOpening("coffeeRoasters")}
            />
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
            <img
              src="assets/devMobile.png"
              className="github"
              onClick={projectOpening("github")}
            />
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
