export const BASE_URL = "https://pokeapi.co/api/v2";
export const BASE_URL_CONTENT = "https://raw.githubusercontent.com";
export const BASE_URL_DUMMYAPI = "https://dummyjson.com";

export const postDataApi = () => {
  return `${BASE_URL_DUMMYAPI}/posts/add`;
};

export const getPokemonsRoute = ({
  offset,
  limit = 10,
}: {
  offset: number;
  limit?: number;
}) => {
  return `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
};

export const getPokemonImage = (id: string) => {
  return `${BASE_URL_CONTENT}/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};
export const getPokemonByIdRoute = (id: string) => {
  return `${BASE_URL}/pokemon/${id}`;
};
