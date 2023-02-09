import { useParams } from "react-router-dom";
import CharacterType from "../../types/CharacterType";
import { getSingleCharacterWithEpisode } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import BigCard from "../../components/SingleCharacter/BigCard";

function Character() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<CharacterType & { episodeName: string }>(
    ["characters", id],
    () => getSingleCharacterWithEpisode(id!)
  );

  if (isLoading) {
    return (
      <div className="loading">
        <TailSpin
          height="200"
          width="200"
          color="#00bdbd"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (!data) {
    navigate("/");
    return null;
  }
  const { image, name, status, species, location, episodeName } = data;

  return (
    <BigCard
      type="big"
      key={id}
      image={image}
      name={name}
      status={status}
      species={species}
      location={location.name}
      episode={episodeName}
    />
  );
}

export default Character;
