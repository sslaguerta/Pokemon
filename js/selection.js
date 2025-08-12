const pokemons = [
  {
    name: "Charmander",
    image: "/images/charmander.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
    type: "Fire",
    hp: 39,
    attack: 52,
    defense: 43,
  },
  {
    name: "Pikachu",
    image: "/images/Pika.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif",
    type: "Electric",
    hp: 35,
    attack: 55,
    defense: 40,
  },
  {
    name: "Squirtle",
    image: "/images/squirtle.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
    type: "Water",
    hp: 44,
    attack: 48,
    defense: 65,
  },
  {
    name: "Dratini",
    image: "/images/dratini.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
    type: "Fire",
    hp: 100,
    attack: 60,
    defense: 30,
  },
  {
    name: "Haunter",
    image: "/images/haunter.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
    type: "Poison",
    hp: 100,
    attack: 60,
    defense: 30,
  },
  {
    name: "Psyduck",
    image: "/images/psyduck.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
    type: "Water",
    hp: 100,
    attack: 60,
    defense: 30,
  },
];

function startTournament(selectedPokemon) {
  const players = [
    { name: "You", pokemon: selectedPokemon },
    { name: "Ash", pokemon: getRandomPokemon() },
    { name: "Misty", pokemon: getRandomPokemon() },
    { name: "Brock", pokemon: getRandomPokemon() },
    { name: "Red", pokemon: getRandomPokemon() },
    { name: "Fernan", pokemon: getRandomPokemon() },
  ];
  const schedule = generateRoundRobin(players.length);

  localStorage.setItem("players", JSON.stringify(players));
  localStorage.setItem("schedule", JSON.stringify(schedule));

  window.location.href = "battleField.html";

  // console.log(localStorage.getItem("players"));
  // console.log(localStorage.getItem("schedule"));
}

function getRandomPokemon() {
  return pokemons[Math.floor(Math.random() * pokemons.length)];
}

function generateRoundRobin(numPlayers) {
  let schedule = [];
  let players = [...Array(numPlayers).keys()]; // [0,1,2,3,4,5]

  for (let round = 0; round < numPlayers - 1; round++) {
    for (let i = 0; i < numPlayers / 2; i++) {
      let home = players[i];
      let away = players[numPlayers - 1 - i];
      schedule.push({ round: round + 1, match: [home, away] });
    }
    players.splice(1, 0, players.pop());
  }
  return schedule;
}

const carousel = document.querySelector(".carousel");
const pokemonNameDisplay = document.querySelector(".pokemon-name");

let currentIndex = 0;

function renderPokemon(index) {
  const pokemon = pokemons[index];
  carousel.innerHTML = `
    <div class="pokemon-card" data-name="${pokemon.name}">
      <img src="${pokemon.image}" alt="${pokemon.name}" />
      <div class="attributes-div">
      <table>
        <th>Attributes</th>
        <tr>
            <td>Type:</td>
            <td>${pokemon.type}</td>
        </tr>
        <tr>
            <td>Hp:</td>
            <td>${pokemon.hp}</td>
        </tr>
        <tr>
            <td>Attack:</td>
            <td>${pokemon.attack}</td>
        </tr>
        <tr>
            <td>Defense:</td>
            <td>${pokemon.defense}</td>
        </tr>
      </table>
      </div>
    </div>`;

  pokemonNameDisplay.textContent = pokemon.name;

  document.querySelector(".pokemon-card").addEventListener("click", () => {
    startTournament(pokemon);
  });
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + pokemons.length) % pokemons.length;
  renderPokemon(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % pokemons.length;
  renderPokemon(currentIndex);
});

renderPokemon(currentIndex);
