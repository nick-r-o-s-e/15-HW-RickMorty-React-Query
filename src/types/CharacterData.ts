import CharacterType from "./CharacterType";
interface CharacterData extends Array<CharacterType | string> {
  0: CharacterType;
  1: string; //EPISODE NAME
}

export default CharacterData;
