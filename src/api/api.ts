import axios from "axios";

export const getCharactersPage = async (
  keys: readonly (unknown | string)[]
) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${keys[1]}`
  );
  return data;
};

export const getSingleCharacterWithEpisode = async (id: string) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const { data: episodeData } = await axios.get(data.episode[0]);

  return { ...data, episodeName: episodeData.name };
};

export async function getEpisodeName(episodeUrl: string) {
  return axios.get(episodeUrl).then(({ data }) => data.name);
}
