import Component from "./Component.js";
import pokemon from "../getPokemon.js";

class Card extends Component {
  pokemon;
  constructor(parent, tag, className) {
    super(parent, "li", className);
    this.render();
    this.element = pokemon;
  }

  render() {
    this.element.innerHTML = `
          <div class="card pokemon__card">
            <img
              src="${pokemon.sprites.other.home.front_default}"
              alt="${pokemon.name}"
              width="250"
              height="250"
              class="pokemon__picture card-img-top"
            />
            <div class="card-body">
              <p class="pokemon__name card-title">Pokemon id: ${pokemon.id} </p>   
              <p >Pokemon name: ${pokemon.name} </p>
              <p class="pokemon__name card-title">Pokemon type: ${pokemon.types[0].type.name} </p>
              <p class="pokemon__name card-title"></p>
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

export default Card;
