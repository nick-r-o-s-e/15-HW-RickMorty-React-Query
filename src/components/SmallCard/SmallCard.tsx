import "./SmallCard.scss"

interface Props {
  image: string;
  name: string;
  status: string;
}

function SmallCard({ image, name, status }: Props) {
  return (
    <div className={`card card--character small-card`}>
      <div
        className="image-div"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card__content">
        <div className="card__content__heading">
          <h1>{name}</h1>
        </div>
      </div>
      <h2>{status == "Alive" ? "🟢 Alive" : "🔴 Dead"}</h2>
    </div>
  );
}

export default SmallCard;
