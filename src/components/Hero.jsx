import "./Hero.scss";

export default function Hero({ onClick }) {
  const clickHandler = () => {
    onClick();
  };
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="patternSection">
          <div className="patternRing"></div>
          <div className="patternRing"></div>
          <div className="patternRing"></div>
          <div className="patternRing"></div>
          <div className="patternRing"></div>
        </div>
        <div className="circle"></div>
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
            <button onClick={clickHandler}>Contact me</button>
          </div>
          <img src="assets/profile-img.jpg" />
        </section>
      </div>
    </div>
  );
}
