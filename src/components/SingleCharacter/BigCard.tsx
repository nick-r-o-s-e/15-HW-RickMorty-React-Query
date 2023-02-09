import "./BigCard.scss"

interface Props {
  image: string;
  name: string;
  status: string;
  location: string;
  episode: string;
  species: string;
  type: string;
}

function BigCard({
  image,
  name,
  status,
  location,
  episode,
  species,
  type,
}: Props) {
  return (
    <div className="single-character">
      <div className={`card card--character big-card`}>
        <img className="card__image" src={image} />
        <div className="card__content">
          <div className="card__content__heading">
            <h1>{name}</h1>
            <h2>
              {status == "Alive" ? "🟢 Alive" : "🔴 Dead"} - {species}
            </h2>
          </div>
          <div className="card__content__details">
            <h3>Last known location:</h3>
            <p>{location}</p>
          </div>
          <div className="card__content__details">
            <h3>First seen in:</h3>
            <p>{episode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
