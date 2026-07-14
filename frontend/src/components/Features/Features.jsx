import "./Features.css";
import FeatureCard from "../FeatureCard/FeatureCard";

function Features() {
    return (
        <section className="features">

            <h2>Why Choose EcoTrail?</h2>

            <p className="features-subtitle">
                Everything you need to plan eco-friendly adventures in one place.
            </p>

            <div className="features-grid">

                <FeatureCard
                    icon="🌿"
                    title="Smart AI Planning"
                    description="Generate personalized travel itineraries based on your preferences."
                />

                <FeatureCard
                    icon="🗺️"
                    title="Interactive Maps"
                    description="Discover destinations with maps and navigation."
                />

                <FeatureCard
                    icon="☀️"
                    title="Live Weather"
                    description="Check weather forecasts before starting your journey."
                />

                <FeatureCard
                    icon="📖"
                    title="Travel Journal"
                    description="Capture memories and keep track of your adventures."
                />

            </div>

        </section>
    );
}

export default Features;