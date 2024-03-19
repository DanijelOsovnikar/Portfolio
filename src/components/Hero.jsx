import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-section">
        <img src="assets/pattern-rings.svg" className="ringsImg" />
        <img src="assets/pattern-circle.svg" className="circleImg" />
        <section>
          <div className="infoSection">
            <h1>
              Nice to meet you! <br />
              I'm <span>Danijel Osovnikar</span>.
            </h1>
            <p>
              Based in the Serbia, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button>Contact me</button>
          </div>
          <img src="assets/profile-img.jpg" />
        </section>
      </div>
    </div>
  );
}
