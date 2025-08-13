//get the data from localStorage
const players = JSON.parse(localStorage.getItem("players")) || [];
const schedule = JSON.parse(localStorage.getItem("schedule")) || [];

let currentMatchIndex = 0;
let scores = new Array(players.length).fill(0);

const scoreboardElement = document.querySelector(".scoreboard");
const battleAreaElement = document.querySelector(".battle-area");
const attackButtons = document.querySelector(".attack-buttons");

function renderScoreboard() {
  const players = JSON.parse(localStorage.getItem("players")) || [];

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
    tableHTML += `
      <tr>
        ${
          player.name === "You"
            ? `<td style="color: yellow">${player.name}</td>`
            : `<td>${player.name}</td>`
        }
        <td>${player.score || 0}</td>
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

function nextMatch() {
  currentMatchIndex++;
  if (currentMatchIndex >= schedule.length) {
    console.log("Finished");
    return;
  }
  renderScoreboard();
  renderBattleArea();
}

function renderBattleArea() {
  const match = schedule[currentMatchIndex];
  const player1 = players[match.match[0]];
  console.log(players[match.match[0]]);
  const player2 = players[match.match[1]];

  battleAreaElement.innerHTML = `
    <div class="pokemon-area">
    <div class="inbattle-pokemon">
        <h3 style="color:${player1.pokemon.hp >= 30 ? "green" : "red"}">
          Health: ${player1.pokemon.hp} <br> DEF: ${player1.pokemon.defense}
        </h3>
        <img src="${player1.pokemon.movingImg}" alt="${
    player1.name
  }" class="flip-horizontal"/>
         <div class="player-details"> 
            <h4>${player1.level}</h4>
            <h2>${player1.name}</h2>
         </div>
       
    </div>
        <div class="inbattle-pokemon">
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

  attackButtons.innerHTML = `
    ${player1.pokemon.attacks
      .map((attack) => `<button class="attack-btn">${attack.name}</button>`)
      .join("")}
    `;

  document.querySelectorAll(".attack-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      handlePlayerAttack(player1, player2, index);
    });
  });
}

function calculateDamage(attacker, defender) {
  const luckFactor = 1 + (Math.random() * 0.2 - 0.1); // -10% to +10% luck factor
  const defenseFactor = (100 - defender.pokemon.defense) / 100; //Defense = 30 → 100 - 30 = 70 → 70% of the damage still gets through.
  const levelFactor = 1 + (attacker.level - 1) * 0.1; // each level increase 10% damage

  // Randomized base attack value between 15 and 25
  const baseAttack = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

  return Math.floor(baseAttack * luckFactor * defenseFactor * levelFactor);
}

function handlePlayerAttack(attacker, defender, attackIndex) {
  const attack = attacker.pokemon.attacks[attackIndex];
  const damage = calculateDamage(attacker, defender);

  defender.pokemon.hp -= damage;

  console.log(
    `${attacker.name} used ${attack.name}! ${defender.name} took ${damage} damage.`
  );

  if (defender.pokemon.hp <= 0) {
    defender.pokemon.hp = 0;
    console.log(`${defender.name} fainted!`);
    renderBattleArea();
    return;
  }
  renderBattleArea();

  setTimeout(() => {
    handleComputerAttack(defender, attacker);
  }, 800);
}

function handleComputerAttack(attacker, defender) {
  const randomIndex = Math.floor(
    Math.random() * attacker.pokemon.attacks.length
  );
  const attack = attacker.pokemon.attacks[randomIndex]; //use for console.log

  const damage = calculateDamage(attacker, defender);

  defender.pokemon.hp -= damage;

  console.log(
    `Computer (${attacker.name}) used ${attack.name}! ${defender.name} took ${damage} damage.`
  );

  if (defender.pokemon.hp <= 0) {
    defender.pokemon.hp = 0;
    console.log(`${defender.name} fainted!`);
  }

  renderBattleArea();
}

renderScoreboard();
renderBattleArea();
