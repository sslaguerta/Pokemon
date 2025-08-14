const winners = JSON.parse(localStorage.getItem("topPlayers")) || [];
const winnerContainer = document.querySelector(".winner");

winners.forEach((player) => {
  console.log(
    `${player.name} - Score: ${player.score} - ${player.pokemon.movingImg}`
  );
});
console.log(winners);
let winnerContainerHtml = `
    <h1> Winner/s </h1>
    <div class="winners">
`;

winnerContainerHtml += winners
  .map(
    (player) =>
      `
    <div class="pokemon-container">
        <img src="${player.pokemon.movingImg}"/>
        <h2>${player.name} - Score: ${player.score} </h2>
    </div>
    `
  )
  .join("");

winnerContainerHtml += `
    </div>
    <div class="btn-area">
        <a href="index.html"
            ><button><i class="fa-solid fa-rotate-right fa-flip-both"></i></button></a
        >
    </div>`;

winnerContainer.innerHTML = winnerContainerHtml;
