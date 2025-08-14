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
  {
    name: "Bulbasaur",
    image: "/images/bulbasaur.png",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
    type: "Grass",
    hp: 100,
    defense: 50,
    attacks: [
      { name: "Vine Whip" },
      { name: "Razor Leaf" },
      { name: "Tackle" },
    ],
  },
  {
    name: "Paras",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
    type: "Bug",
    hp: 100,
    defense: 42,
    attacks: [{ name: "Scratch" }, { name: "Spore" }, { name: "Slash" }],
  },
  {
    name: "Hitmonchan",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif",
    type: "Fighting",
    hp: 100,
    defense: 52,
    attacks: [
      { name: "Punch" },
      { name: "High Jump Kick" },
      { name: "Mega Punch" },
    ],
  },
  {
    name: "Feraligatr",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif",
    type: "Water",
    hp: 100,
    defense: 60,
    attacks: [{ name: "Waterfall" }, { name: "Bite" }, { name: "Crunch" }],
  },
  {
    name: "Gengar",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    type: "Ghost",
    hp: 100,
    defense: 45,
    attacks: [
      { name: "Shadow Ball" },
      { name: "Hypnosis" },
      { name: "Dream Eater" },
    ],
  },
  {
    name: "Arcanine",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    type: "Fire",
    hp: 100,
    defense: 55,
    attacks: [
      { name: "Flamethrower" },
      { name: "Extreme Speed" },
      { name: "Bite" },
    ],
  },
  {
    name: "Machamp",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
    type: "Fighting",
    hp: 100,
    defense: 60,
    attacks: [
      { name: "Dynamic Punch" },
      { name: "Karate Chop" },
      { name: "Submission" },
    ],
  },
  {
    name: "Alakazam",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    type: "Psychic",
    hp: 100,
    defense: 40,
    attacks: [{ name: "Psychic" }, { name: "Teleport" }, { name: "Recover" }],
  },
  {
    name: "Snorlax",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
    type: "Normal",
    hp: 100,
    defense: 65,
    attacks: [{ name: "Body Slam" }, { name: "Rest" }, { name: "Hyper Beam" }],
  },
  {
    name: "Lapras",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
    type: "Water/Ice",
    hp: 100,
    defense: 60,
    attacks: [{ name: "Ice Beam" }, { name: "Surf" }, { name: "Body Slam" }],
  },
  {
    name: "Jolteon",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
    type: "Electric",
    hp: 100,
    defense: 42,
    attacks: [
      { name: "Thunderbolt" },
      { name: "Quick Attack" },
      { name: "Double Kick" },
    ],
  },
  {
    name: "Dragonite",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    type: "Dragon/Flying",
    hp: 100,
    defense: 60,
    attacks: [
      { name: "Dragon Claw" },
      { name: "Hyper Beam" },
      { name: "Wing Attack" },
    ],
  },
  {
    name: "Scyther",
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
    type: "Bug/Flying",
    hp: 100,
    defense: 50,
    attacks: [
      { name: "Slash" },
      { name: "Wing Attack" },
      { name: "Double Team" },
    ],
  },
  {
    name: "Ivysaur",
    type: "Grass/Poison",
    hp: 100,
    defense: 55,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
    attacks: [
      { name: "Vine Whip" },
      { name: "Sleep Powder" },
      { name: "Razor Leaf" },
    ],
  },
  {
    name: "Charmeleon",
    type: "Fire",
    hp: 100,
    defense: 48,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
    attacks: [
      { name: "Fire Fang" },
      { name: "Flamethrower" },
      { name: "Slash" },
    ],
  },
  {
    name: "Wartortle",
    type: "Water",
    hp: 100,
    defense: 58,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
    attacks: [{ name: "Water Gun" }, { name: "Bite" }, { name: "Rapid Spin" }],
  },
  {
    name: "Blastoise",
    type: "Water",
    hp: 100,
    defense: 65,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
    attacks: [{ name: "Hydro Pump" }, { name: "Skull Bash" }, { name: "Surf" }],
  },
  {
    name: "Caterpie",
    type: "Bug",
    hp: 100,
    defense: 40,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
    attacks: [
      { name: "Tackle" },
      { name: "String Shot" },
      { name: "Bug Bite" },
    ],
  },
  {
    name: "Metapod",
    type: "Bug",
    hp: 100,
    defense: 50,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
    attacks: [{ name: "Harden" }, { name: "Tackle" }, { name: "Stun Spore" }],
  },
  {
    name: "Butterfree",
    type: "Bug/Flying",
    hp: 100,
    defense: 55,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
    attacks: [
      { name: "Gust" },
      { name: "Confusion" },
      { name: "Sleep Powder" },
    ],
  },
  {
    name: "Weedle",
    type: "Bug/Poison",
    hp: 100,
    defense: 42,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
    attacks: [
      { name: "Poison Sting" },
      { name: "String Shot" },
      { name: "Bug Bite" },
    ],
  },
  {
    name: "Kakuna",
    type: "Bug/Poison",
    hp: 100,
    defense: 50,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
    attacks: [
      { name: "Harden" },
      { name: "Poison Sting" },
      { name: "Minimize" },
    ],
  },
  {
    name: "Beedrill",
    type: "Bug/Poison",
    hp: 100,
    defense: 48,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
    attacks: [
      { name: "Twineedle" },
      { name: "Fury Attack" },
      { name: "Poison Jab" },
    ],
  },
  {
    name: "Pidgey",
    type: "Normal/Flying",
    hp: 100,
    defense: 45,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
    attacks: [{ name: "Tackle" }, { name: "Gust" }, { name: "Quick Attack" }],
  },
  {
    name: "Pidgeotto",
    type: "Normal/Flying",
    hp: 100,
    defense: 50,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
    attacks: [
      { name: "Gust" },
      { name: "Wing Attack" },
      { name: "Feather Dance" },
    ],
  },
  {
    name: "Pidgeot",
    type: "Normal/Flying",
    hp: 100,
    defense: 60,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
    attacks: [
      { name: "Aerial Ace" },
      { name: "Feather Dance" },
      { name: "Hurricane" },
    ],
  },
  {
    name: "Rattata",
    type: "Normal",
    hp: 100,
    defense: 40,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
    attacks: [
      { name: "Quick Attack" },
      { name: "Hyper Fang" },
      { name: "Tail Whip" },
    ],
  },
  {
    name: "Raticate",
    type: "Normal",
    hp: 100,
    defense: 55,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
    attacks: [
      { name: "Hyper Fang" },
      { name: "Facade" },
      { name: "Super Fang" },
    ],
  },
  {
    name: "Spearow",
    type: "Normal/Flying",
    hp: 100,
    defense: 45,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
    attacks: [
      { name: "Peck" },
      { name: "Fury Attack" },
      { name: "Aerial Ace" },
    ],
  },
  {
    name: "Fearow",
    type: "Normal/Flying",
    hp: 100,
    defense: 60,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
    attacks: [
      { name: "Drill Peck" },
      { name: "Air Cutter" },
      { name: "Me First" },
    ],
  },
  {
    name: "Ekans",
    type: "Poison",
    hp: 100,
    defense: 45,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif",
    attacks: [{ name: "Poison Sting" }, { name: "Bite" }, { name: "Wrap" }],
  },
  {
    name: "Arbok",
    type: "Poison",
    hp: 100,
    defense: 60,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
    attacks: [{ name: "Poison Jab" }, { name: "Glare" }, { name: "Crunch" }],
  },
  {
    name: "Raichu",
    type: "Electric",
    hp: 100,
    defense: 50,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
    attacks: [
      { name: "Thunderbolt" },
      { name: "Quick Attack" },
      { name: "Iron Tail" },
    ],
  },
  {
    name: "Sandshrew",
    type: "Ground",
    hp: 100,
    defense: 55,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    attacks: [{ name: "Scratch" }, { name: "Slash" }, { name: "Sand-attack" }],
  },
  {
    name: "Sandslash",
    type: "Ground",
    hp: 100,
    defense: 65,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
    attacks: [{ name: "Dig" }, { name: "Slash" }, { name: "Earthquake" }],
  },
  {
    name: "Clefairy",
    type: "Fairy",
    hp: 100,
    defense: 55,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
    attacks: [
      { name: "Powder Snow" },
      { name: "Metronome" },
      { name: "Moonlight" },
    ],
  },
  {
    name: "Clefable",
    type: "Fairy",
    hp: 100,
    defense: 65,
    image:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
    movingImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
    attacks: [
      { name: "Moonblast" },
      { name: "Metronome" },
      { name: "Calm Mind" },
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
