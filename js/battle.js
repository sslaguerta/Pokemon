//get the data from localStorage
const players = JSON.parse(localStorage.getItem("players")) || [];
const schedule = JSON.parse(localStorage.getItem("schedule")) || [];

let currentMatchIndex = 0;
let scores = new Array(players.length).fill(0);

const scoreboardElement = document.querySelector(".scoreboard");
const battleAreaElement = document.querySelector(".battle-area");

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
      <h1 id="player1-name">${player1.pokemon.name}</h1>
      <h2>V.S.</h2>
      <h1 id="player2-name">${player2.pokemon.name}</h1>
    </div>
  `;

  scoreboardElement.innerHTML = tableHTML + currentBattleHTML;
}

function renderBattleArea() {
  const match = schedule[currentMatchIndex];
  const player1 = players[match.match[0]];
  console.log(players[match.match[0]]);
  const player2 = players[match.match[1]];

  battleAreaElement.innerHTML = `
    <div class="pokemon-area">
    <div>
      <img src="${player1.pokemon.movingImg}" alt="${player1.name}"/>
    </div>
    <div>
      <img src="${player2.pokemon.movingImg}" alt="${player2.name}" />
    </div>
    </div>
  `;
}
renderScoreboard();
renderBattleArea();
