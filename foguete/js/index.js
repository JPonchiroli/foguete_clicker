var clicks = 0;
var upgrades = 0;
var qntdClick = 0;
var qntdUprade1 = 0;
var qntdUprade2 = 0;
var custoUpgrade1 = 10;
var custoUpgrade2 = 100;

document.getElementById("quantidadeClicks").textContent = clicks;

document.getElementById("infoClicks").textContent =
  "Qntd p/ Segundo: " + qntdClick;

document.getElementById("qntdClick").textContent = "+" + (qntdClick + 1);

document.getElementById("custoUp1").textContent = custoUpgrade1 + " Luas";
document.getElementById("qntdUp1").textContent = qntdUprade1;
document.getElementById("custoUp2").textContent = custoUpgrade2 + " Luas";
document.getElementById("qntdUp2").textContent = qntdUprade2;

function clicado() {
  document.getElementById("quantidadeClicks").textContent = clicks += 1;
}

function upgrade1() {
  if (clicks >= custoUpgrade1) {
    document.getElementById("quantidadeClicks").textContent = clicks -=
      custoUpgrade1;
    upgrades += 1;
    custoUpgrade1 = 1 + custoUpgrade1 + qntdUprade1 * 2;
    qntdUprade1++;

    setInterval(function () {
      clicks += 1;
      quantidadeClicks.textContent = clicks += upgrades;
    }, 500);
  }

  document.getElementById("custoUp1").textContent = custoUpgrade1 + " Luas";
  document.getElementById("qntdUp1").textContent = qntdUprade1;
  document.getElementById("infoClicks").textContent =
    "Qntd p/ Segundo: " + (qntdClick + upgrades);
}

function upgrade2() {
  if (clicks >= custoUpgrade2) {
    document.getElementById("quantidadeClicks").textContent = clicks -=
      custoUpgrade2;
    upgrades += 10;
    custoUpgrade2 = 1 + custoUpgrade2 + qntdUprade2 * 10;
    qntdUprade2++;
  }
  document.getElementById("custoUp2").textContent = custoUpgrade2 + " Luas";
  document.getElementById("qntdUp2").textContent = qntdUprade2;
  document.getElementById("infoClicks").textContent =
    "Qntd p/ Segundo: " + (qntdClick + upgrades);
}

function autoClick() {
  if (clicks >= 1000) {
    document.getElementById("quantidadeClicks").textContent = clicks -= 1000;
  }
}

const variableValueElement = document.querySelector(".variableValue");
const showButton = document.getElementById("showButton");

showButton.addEventListener("click", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  variableValueElement.style.left = mouseX + "px";
  variableValueElement.style.top = mouseY - 20 + "px"; // Offset para que o valor fique acima do cursor

  variableValueElement.style.display = "inline";
  setTimeout(() => {
    variableValueElement.style.display = "none";
  }, 100);
});

console.log(clicks);
