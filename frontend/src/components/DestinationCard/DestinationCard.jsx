import "./DestinationCard.css";

function DestinationCard({ destination }) {

    return (

        <div className="destination-card">

            <div className="card-image">

                Image

            </div>

            <h3>{destination.name}</h3>

            <p>{destination.location}</p>
            
            <div className="card-footer">

                <span>⭐ {destination.rating}</span>

                <button>
                    Explore
                </button>

            </div>

        </div>

    );

}

export default DestinationCard;