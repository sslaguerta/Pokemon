//get the data from localStorage
const players = JSON.parse(localStorage.getItem("players")) || [];
const schedule = JSON.parse(localStorage.getItem("schedule")) || [];

let currentMatchIndex = 0;
let scores = new Array(players.length).fill(0);

const scoreboardElement = document.querySelector(".scoreboard");
const battleAreaElement = document.querySelector(".battle-area");
const attackButtons = document.querySelector(".attack-buttons");
const round = document.querySelector(".round");

matchIndicator();

function matchIndicator() {
  round.innerHTML = `Match ${currentMatchIndex + 1}`;

  // Restart the moveUp animation
  round.style.animation = "none";
  round.offsetHeight; // force reflow
  round.style.animation = "moveUp 2s ease-in-out forwards";
}

// console.log(schedule.length);
function renderScoreboard() {
  const players = JSON.parse(localStorage.getItem("players")) || [];
  const lastWinner = localStorage.getItem("lastWinner") || "";

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th colspan="2">Scoreboard</th>
        </tr>
        <tr>
          <td>Player Name</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
  `;

  players.forEach((player) => {
    const scoreClass = player.name === lastWinner ? "winner-highlight" : "";
    tableHTML += `
      <tr>
        ${
          player.name === "You"
            ? `<td style="background-color: yellow; color: Blue">${player.name}</td>`
            : `<td>${player.name}</td>`
        }
        <td class="${scoreClass}">${player.score || 0}</td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  const match = schedule[currentMatchIndex];
  const player1 = players[match.match[0]];
  const player2 = players[match.match[1]];

  let currentBattleHTML = `
    <div class="current-battle">
      <h3 id="player1-name">${player1.name}</h3>
      <h4>V.S.</h4>
      <h3 id="player2-name">${player2.name}</h3>
    </div>
  `;

  scoreboardElement.innerHTML = tableHTML + currentBattleHTML;
}

function renderBattleArea() {
  const match = schedule[currentMatchIndex]; //check what match is ongoing base on index
  const player1 = players[match.match[0]]; //gets the player by accessing match index
  //   console.log(players[match.match[0]]);
  const player2 = players[match.match[1]];

  battleAreaElement.innerHTML = `
    <div class="pokemon-area">
    <div class="inbattle-pokemon">
        <h4>${player1.pokemon.name}</h4>
        <h3 style="color:${player1.pokemon.hp >= 30 ? "green" : "red"}">
          Health: ${player1.pokemon.hp} <br> DEF: ${player1.pokemon.defense}
        </h3>
        <img src="${player1.pokemon.movingImg}" id="pokemonCur" alt="${
    player1.name
  }" class="flip-horizontal"/>
         <div class="player-details"> 
            <h4>${player1.level}</h4>
            <h2>${player1.name}</h2>
         </div>
       
    </div>
        <div class="inbattle-pokemon">
            <h4>${player2.pokemon.name}</h4>
            <h3 style="color:${player2.pokemon.hp >= 30 ? "green" : "red"}">
            Health: ${player2.pokemon.hp} <br> DEF: ${player2.pokemon.defense}
            </h3>
        <img src="${player2.pokemon.movingImg}" alt="${player2.name}" />
        <div class="player-details"> 
            <h4>${player2.level}</h4>
            <h2>${player2.name}</h2>
         </div>
        </div>
    </div>
  `;

  // Player vs CPU
  // check if the player 1 is a human so that it can render buttons
  if (player1.name === "You") {
    attackButtons.innerHTML = player1.pokemon.attacks
      .map((atk) => `<button class="attack-btn">${atk.name}</button>`)
      .join(""); //merges all array elements into a single string with nothing in between

    //puts onclick function in every button base on index
    document.querySelectorAll(".attack-btn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        handlePlayerAttack(player1, player2, index);
      });
    });
  }
  // CPU vs CPU
  else {
    attackButtons.innerHTML = "<p>CPU battle in progress...</p>";
    setTimeout(() => simulateCpuBattle(player1, player2), 500);
    // setTimeout(() => handleComputerAttack(player1, player2), 1000);
  }
}

function calculateDamage(attacker, defender) {
  const luckFactor = 1 + (Math.random() * 0.2 - 0.1); // If luckFactor = 0.95, then 100 * 0.95 = 95 → 5% less damage
  const defenseFactor = (100 - defender.pokemon.defense) / 100; //Defense = 30 → 100 - 30 = 70 → 70% of the damage still gets through.
  const levelFactor = 1 + (attacker.level - 1) * 0.1; // each level increase 10% damage

  // Randomized base attack value between 15 and 25
  const baseAttack = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

  return Math.floor(baseAttack * luckFactor * defenseFactor * levelFactor);
}

function highlightPokemon(playerName) {
  const pokemonImg = Array.from(
    document.querySelectorAll(".inbattle-pokemon img")
  ).find((img) => img.alt === playerName);

  if (pokemonImg) {
    pokemonImg.classList.add("pokemon-hit");

    // Remove animation class after animation ends
    pokemonImg.addEventListener(
      "animationend",
      () => {
        pokemonImg.classList.remove("pokemon-hit");
      },
      { once: true }
    );
  }
}

function showDamage(playerName, damage) {
  const pokemonContainer = Array.from(
    document.querySelectorAll(".inbattle-pokemon")
  ).find((container) => container.querySelector(`img[alt="${playerName}"]`));

  if (pokemonContainer) {
    const dmgElement = document.createElement("div");
    dmgElement.classList.add("damage-text");
    dmgElement.innerHTML = `- ${damage} Aray ko!`;

    // Position relative so absolute damage text works
    pokemonContainer.style.position = "relative";
    pokemonContainer.appendChild(dmgElement);

    // Remove after animation
    setTimeout(() => {
      dmgElement.remove();
    }, 1000);
  }
}

function handlePlayerAttack(attacker, defender, attackIndex) {
  attackButtons.style.display = "none";
  const attack = attacker.pokemon.attacks[attackIndex]; //gets the attacker attack index for identifying what attack is used
  const damage = calculateDamage(attacker, defender);

  defender.pokemon.hp -= damage; // decrease opponent hp

  console.log(
    `${attacker.name} used ${attack.name}! ${defender.name} took ${damage} damage.`
  );

  if (defender.pokemon.hp <= 0) {
    defender.pokemon.hp = 0;
    const winner = players.find((p) => p.name === attacker.name);
    if (winner) {
      winner.score++;
      localStorage.setItem("players", JSON.stringify(players));
      localStorage.setItem("lastWinner", winner.name);
    }
    console.log(`${defender.name} fainted!`);
    renderBattleArea(); // to update hp of defeated pokemon
    highlightPokemon(defender.name);
    showDamage(defender.name, damage);
    setTimeout(nextMatch, 1500);
    return; // to refrain computer for attacking back
  }
  renderBattleArea();
  highlightPokemon(defender.name);
  showDamage(defender.name, damage);
  setTimeout(() => {
    handleComputerAttack(defender, attacker);
    attackButtons.style.display = "flex";
  }, 1000);
}

function handleComputerAttack(attacker, defender) {
  const randomIndex = Math.floor(
    Math.random() * attacker.pokemon.attacks.length // for the computer to select an attack automatically
  );
  const attack = attacker.pokemon.attacks[randomIndex]; //used for console.log

  const damage = calculateDamage(attacker, defender);

  defender.pokemon.hp -= damage;

  console.log(
    `Computer (${attacker.name}) used ${attack.name}! ${defender.name} took ${damage} damage.`
  );

  if (defender.pokemon.hp <= 0) {
    defender.pokemon.hp = 0;
    highlightPokemon(defender.name);
    showDamage(defender.name, damage);

    const winner = players.find((p) => p.name === attacker.name);
    if (winner) {
      winner.score++;
      localStorage.setItem("players", JSON.stringify(players));
      localStorage.setItem("lastWinner", winner.name);
    }
    console.log(`${defender.name} fainted!`);
    nextMatch();
    return;
  }
  renderBattleArea();
  highlightPokemon(defender.name);
  showDamage(defender.name, damage);
}

function nextMatch() {
  players.forEach((player) => {
    player.pokemon.hp = 100;
  });

  currentMatchIndex++;
  if (currentMatchIndex >= schedule.length) {
    console.log("Tournament finished!");
    const highestScore = Math.max(...players.map((p) => p.score || 0));
    const topPlayers = players.filter((p) => (p.score || 0) === highestScore);

    // Store in localStorage
    console.log(topPlayers);
    window.location.href = 'winners.html';
    localStorage.setItem("topPlayers", JSON.stringify(topPlayers));
    return;
  }
  renderScoreboard();
  renderBattleArea();
  matchIndicator();
}

function simulateCpuBattle(cpu1, cpu2) {
  const attacker = cpu1; // randomize who is the attacker
  const defender = cpu2; // if cpu1 is the attacker so cpu2 is the defender
  const damage = calculateDamage(attacker, defender); //calculate damage as usual
  defender.pokemon.hp -= damage;
  highlightPokemon(defender.name);
  showDamage(defender.name, damage);

  console.log(
    `${attacker.name} attacked ${defender.name} for ${damage} damage.`
  );

  //   if (defender.pokemon.hp <= 0) {
  //     defender.pokemon.hp = 0;
  //     nextMatch();
  //   }

  if (defender.pokemon.hp <= 0) {
    defender.pokemon.hp = 0;
    highlightPokemon(defender.name);
    showDamage(defender.name, damage);
    const winner = players.find((p) => p.name === attacker.name);
    if (winner) {
      winner.score++;
      localStorage.setItem("players", JSON.stringify(players));
      localStorage.setItem("lastWinner", winner.name);
    }
    console.log(`${defender.name} fainted!`);
    setTimeout(nextMatch, 1500);
    return;
  }

  setTimeout(() => {
    handleComputerAttack(cpu2, cpu1);
    attackButtons.style.display = "flex";
  }, 800);
  //   setTimeout(() => simulateCpuBattle(cpu1, cpu2), 1000);
  //   renderBattleArea();
}

renderScoreboard();
renderBattleArea();
