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
              alt=""
              class="pokemon__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="pokemon__name card-title">${pokemon.id} </h2>   
              <p >${pokemon.name} </p>
              <p class="pokemon__name card-title">${pokemon.types[0].type.name} </p>
              <p class="pokemon__name card-title">${pokemon.sprites} </p>
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
