import "./Explore.css";
import DestinationCard from "../DestinationCard/DestinationCard";
import { useState } from "react";

function Explore() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Nature",
        "Wildlife",
        "Historical"
    ];

    const destinations = [

    {
        id:1,
        name:"Pachmarhi",
        location:"Madhya Pradesh",
        rating:"4.8",
        category:"Nature"
    },

    {
        id:2,
        name:"Kanha National Park",
        location:"Madhya Pradesh",
        rating:"4.9",
        category:"Wildlife"
    },

    {
        id:3,
        name:"Pench National Park",
        location:"Madhya Pradesh",
        rating:"4.7",
        category:"Wildlife"
    },

    {
        id:4,
        name:"Mandu",
        location:"Madhya Pradesh",
        rating:"4.8",
        category:"Historical"
    }
];

    return (

        <section className="explore">

            <h2>Explore Popular Destinations</h2>

            <input
                type="text"
                placeholder="Search destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
            />

            <div className="category-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? "active-category"
                                : ""
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="destination-grid">
                {destinations

                    .filter((destination) => {

                        const matchesSearch = destination.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());

                        const matchesCategory =
                            selectedCategory === "All" ||
                            destination.category === selectedCategory;

                        return matchesSearch && matchesCategory;
                    })

                    .map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                        />
                    ))}
            </div>

        </section>

    );

}

export default Explore;