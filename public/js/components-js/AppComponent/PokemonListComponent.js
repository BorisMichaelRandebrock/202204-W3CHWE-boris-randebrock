import PokemonApiService from "../../PokemonApiService.js";
import Component from "../Component.js";
import PokemonComponent from "../PokemonComponent.js";

class PokemonListComponent extends Component {
  constructor(parent) {
    super(parent, "row row-cols-1 row-cols-md-2 g-4 list-unstyled", "ul");
    this.render();
  }

  async render() {
    const pokemonApiService = new PokemonApiService();
    const { results } = await pokemonApiService.getPokemonPaginated();

    const pokemonList = Promise.all(
      results.map(async ({ name }) => {
        const pokemon = await pokemonApiService.getPokemonByName(name);
        return pokemon;
      })
    );
    (await pokemonList).forEach((pokemon) => {
      try {
        new PokemonComponent(this.element, pokemon);
      } catch (error) {
        throw new Error(
          "Could not render pokemonComponent @ pokemonListComponent"
        );
      }
    });
  }
}

export default PokemonListComponent;
