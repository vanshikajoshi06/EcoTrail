import "./Hero.css";

function Hero({
  title,
  subtitle,
  taglineHeading,
  description,
  primaryButton,
  secondaryButton,
}){
  return (
    <section className="hero">

      {/* Left Section */}
      <div className="hero-content">

        <p className="tagline">
          🌿 AI-Powered Nature Travel
        </p>

        <h1>
          {title}    
          <br />
          {subtitle}
          <br />
          {taglineHeading}
        </h1>

        <p className="hero-description">
          {description}
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            {primaryButton}
          </button>

          <button className="secondary-btn">
            {secondaryButton}
          </button>
        </div>

      </div>

      {/* Right Section */}
      <div className="hero-image">
        <div className="image-placeholder">
          Hero Image
        </div>
      </div>

    </section>
  );
}

export default Hero;