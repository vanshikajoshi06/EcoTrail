import FeatureCard from "../FeatureCard/FeatureCard";
import "./Features.css";

const features = [
    {
        id: 1,
        icon: "🌿",
        title: "Smart AI Planning",
        description:
            "Generate personalized travel itineraries based on your preferences.",
    },
    {
        id: 2,
        icon: "🗺️",
        title: "Interactive Maps",
        description:
            "Discover destinations with maps and navigation.",
    },
    {
        id: 3,
        icon: "☀️",
        title: "Live Weather",
        description:
            "Check weather forecasts before starting your journey.",
    },
    {
        id: 4,
        icon: "📖",
        title: "Travel Journal",
        description:
            "Capture memories and keep track of your adventures.",
    },
];

function Features() {
    return (
        <section id="features" className="features" >

            <h2>Why Choose EcoTrail?</h2>

            <p className="features-subtitle">
                Everything you need to plan eco-friendly adventures in one place.
            </p>

            <div className="features-grid">

                {
                    features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))
                }
                
            </div>

        </section>
    );
}

export default Features;