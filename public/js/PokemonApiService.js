class PokemonApiService {
  endpoint;

  constructor() {
    this.endpoint = "https://pokeapi.co/api/v2/pokemon/";
  }

  async getPokemonByName(name) {
    const response = await fetch(`${this.endpoint}${name}`);
    const pokemon = await response.json();
    return pokemon;
  }

  async getPokemonPaginated() {
    const response = await fetch(`${this.endpoint}?limit=12&offset=0`);
    const pokemon = await response.json();
    return pokemon;
  }
}
export default PokemonApiService;
