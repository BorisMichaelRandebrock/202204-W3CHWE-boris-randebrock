// const form = document.querySelector(".search-form");
// const search = form.querySelector(".search");
// const image = document.querySelector(".gif");

const getPokemon = async (tag) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${tag}`);
  const pokemon = await response.json();
  return pokemon;
};
const pokemon = await getPokemon("2");
// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const text = search.value;
//   const Pokemon = await getPokemon(text);
//   const gifUrl = Pokemon.data.images.original.url;
//   image.src = gifUrl;
// });

export default pokemon;
