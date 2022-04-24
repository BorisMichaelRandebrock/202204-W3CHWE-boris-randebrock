import Component from "./Component.js";

class PokemonComponent extends Component {
  pokemon;
  constructor(parent, pokemon) {
    super(parent, "col", "li");
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
          <div class="card pokemon__card">
            <img
              src="${this.pokemon.sprites.other.home.front_default}"
              alt="${this.pokemon.name}"
              width="200"      
              class="pokemon__picture card-img-top"
            />
            <div class="card-body">
              <p class="pokemon__name card-title">Pokemon id: ${this.pokemon.id} </p>   
              <p >Pokemon name: ${this.pokemon.name} </p>
              <p class="pokemon__name card-title">Pokemon type: ${this.pokemon.types[0].type.name} </p>
              <p class="pokemon__name card-title">Pokemons height: ${this.pokemon.height} </p>
              <p class="pokemon__name card-title">Pokemons weight: ${this.pokemon.weight} </p>
              <div class="pokemon__info">
                <ul class="list-unstyled">
                </ul>
              </div>
              <div class="pokemon__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="pokemon__actions">
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>       
      `;
  }

  newPokemonCard() {
    const parentElement = this.element.querySelector("ul");

    const appendedChild = document.createElement("li");
    appendedChild.innerHTML = this.pokemon;
    parentElement.append(appendedChild);
  }
}

export default PokemonComponent;
