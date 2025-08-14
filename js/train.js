const currentLevel = document.querySelector(".current-level");
const levelLimit = document.querySelector(".level-limit");
const resetLevel = document.querySelector("#reset");
const tapEffect = document.querySelector(".tap-effect");

let tapCount = 0;
let requiredTapCount = getRandomTaps();
let playerLevel = parseInt(localStorage.getItem("playerLevel") || "1", 10);
let isLevelingUp = false;

const pikachuImg = document.querySelector("img");

function getRandomTaps() {
  return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
}

pikachuImg.addEventListener("click", () => {
  if (isLevelingUp) return;

  tapCount++;
  showTap();
  if (playerLevel === 5) {
    pikachuImg.src = "/images/knocked-out-pika-removebg-preview.png";
    levelLimit.innerHTML = `<h2 style="color: #ff0000cb; -webkit-text-stroke: 0px ; font-weight: lighter">You have reached the level limit</h2>`;
    return;
  }
  if (tapCount >= requiredTapCount && playerLevel < 5) {
    isLevelingUp = true;
    pikachuImg.classList.add("level-up");
    currentLevel.classList.add("level-up");
    playerLevel++;
    tapCount = 0;
    requiredTapCount = getRandomTaps();
    renderLevel();

    // Save the new level to localStorage
    localStorage.setItem("playerLevel", playerLevel);

    setTimeout(() => {
      pikachuImg.classList.remove("level-up");
      currentLevel.classList.remove("level-up");
      isLevelingUp = false;
    }, 500);
  }
});

function renderLevel() {
  currentLevel.innerHTML = `
        <h2>Level: ${playerLevel}</h2>
    `;
}

renderLevel();

resetLevel.addEventListener("click", () => {
  localStorage.setItem("playerLevel", 1);
  window.location.reload();
  renderLevel();
});

function showTap() {
  tapEffect.textContent = `+${tapCount}`;
  tapEffect.style.opacity = "1";
  tapEffect.style.transform = "translateX(-50%) scale(1.2)";

  // Hide it after animation
  setTimeout(() => {
    tapEffect.style.opacity = "0";
    tapEffect.style.transform = "translateX(-50%) scale(1)";
  }, 300);
}
