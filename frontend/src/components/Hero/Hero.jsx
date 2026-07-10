import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Left Section */}
      <div className="hero-content">

        <p className="tagline">
          🌿 AI-Powered Nature Travel
        </p>

        <h1>
          Discover Nature.
          <br />
          Travel Smarter.
          <br />
          Powered by AI.
        </h1>

        <p className="hero-description">
          Plan eco-friendly adventures with AI-generated itineraries,
          live weather updates, interactive maps, and personalized
          travel recommendations.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Exploring
          </button>

          <button className="secondary-btn">
            Learn More
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