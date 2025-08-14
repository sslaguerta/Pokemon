const pokemons = [
  {
    name: "Charmander",
    image: "/images/charmander.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
    type: "Fire",
    hp: 100,
    defense: 45,
    attacks: [{ name: "Ember" }, { name: "Flamethrower" }, { name: "Scratch" }],
  },
  {
    name: "Pikachu",
    image: "/images/Pika.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif",
    type: "Electric",
    hp: 100,
    defense: 40,
    attacks: [
      { name: "Thunder Shock" },
      { name: "Quick Attack" },
      { name: "Thunderbolt" },
    ],
  },
  {
    name: "Squirtle",
    image: "/images/squirtle.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
    type: "Water",
    hp: 100,
    defense: 55,
    attacks: [
      { name: "Water Gun" },
      { name: "Tackle" },
      { name: "Bubble Beam" },
    ],
  },
  {
    name: "Dratini",
    image: "/images/dratini.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
    type: "Dragon",
    hp: 100,
    defense: 50,
    attacks: [{ name: "Dragon Rage" }, { name: "Slam" }, { name: "Twister" }],
  },
  {
    name: "Haunter",
    image: "/images/haunter.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
    type: "Poison",
    hp: 100,
    defense: 42,
    attacks: [
      { name: "Lick" },
      { name: "Shadow Ball" },
      { name: "Night Shade" },
    ],
  },
  {
    name: "Psyduck",
    image: "/images/psyduck.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
    type: "Water",
    hp: 100,
    defense: 48,
    attacks: [
      { name: "Water Gun" },
      { name: "Confusion" },
      { name: "Scratch" },
    ],
  },
];

function randomLevel() {
  return Math.floor(Math.random() * 5) + 1;
}

function startTournament(selectedPokemon) {
  const playerLevel = JSON.parse(localStorage.getItem("playerLevel"));
  const players = [
    {
      name: "You",
      pokemon: selectedPokemon,
      level: playerLevel || 1,
      score: 0,
    },
    { name: "Ash", pokemon: getRandomPokemon(), level: 5, score: 0 },
    {
      name: "Misty",
      pokemon: getRandomPokemon(),
      level: randomLevel(),
      score: 0,
    },
    {
      name: "Brock",
      pokemon: getRandomPokemon(),
      level: randomLevel(),
      score: 0,
    },
    {
      name: "Red",
      pokemon: getRandomPokemon(),
      level: randomLevel(),
      score: 0,
    },
    {
      name: "Fernan",
      pokemon: getRandomPokemon(),
      level: randomLevel(),
      score: 0,
    },
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
  let schedule = []; // for storing all the matches
  let players = [...Array(numPlayers).keys()]; // [0,1,2,3,4,5] Creates an empty array with numPlayers length

  for (let round = 0; round < numPlayers - 1; round++) {
    for (let i = 0; i < numPlayers / 2; i++) {
      let home = players[i]; //2
      let away = players[numPlayers - 1 - i]; //4
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
