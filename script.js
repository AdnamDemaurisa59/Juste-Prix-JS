
"use strict";

// Déclaration des niveaux de difficulté
const niveaux = {
    facile: { maxTentatives: 10, maxNombre: 200, pointsParTentative: 10 },
    moyen: { maxTentatives: 7, maxNombre: 150, pointsParTentative: 20 },
    difficile: { maxTentatives: 5, maxNombre: 150, pointsParTentative: 50 }
};

// Variables de jeu
let niveau = "facile"; // Le niveau initial
let tentativesRestantes;
let nombreSecret;
let score = 0;

const message = document.getElementById("message");
const tentatives = document.getElementById("tentatives");
const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const nextLevelButton = document.getElementById("nextLevelButton");

let body = document.querySelector("body");
let imgCarte = document.querySelector(".carte img");
const tenta = document.querySelector(".tenta");
let positionCarte = document.querySelector(".position-carte");
const scoreDisplay = document.createElement("h2");

// Initialise l'affichage du score
scoreDisplay.id = "score";
scoreDisplay.textContent = `Score : ${score}`;
document.querySelector(".consigne").appendChild(scoreDisplay);

// Fonction pour démarrer le jeu
function gameStart() {
    tentativesRestantes = niveaux[niveau].maxTentatives;
    nombreSecret = Math.floor(Math.random() * niveaux[niveau].maxNombre) + 1;
    
    message.textContent = `Le jeu consiste à deviner un nombre entre 1 et ${niveaux[niveau].maxNombre}`;
    tentatives.textContent = tentativesRestantes;
    guessInput.value = "";
    guessInput.disabled = false;
    submitButton.disabled = false;
    resetButton.style.display = "none";
    nextLevelButton.style.display = "none";
    scoreDisplay.textContent = `Score : ${score}`;
    tenta.style.display = "block";
    body.style.background = "";
    positionCarte.style.height = "";
    imgCarte.style.marginTop = "";
}

// Fonction pour vérifier la proposition
function checkProposition(event) {
    event.preventDefault();

    const proposition = parseInt(guessInput.value, 10);

    if (isNaN(proposition) || proposition < 1 || proposition > niveaux[niveau].maxNombre) {
        message.textContent = `Veuillez entrer un nombre entre 1 et ${niveaux[niveau].maxNombre}.`;
        return;
    }

    tentatives.textContent = --tentativesRestantes;

    if (proposition === nombreSecret) {
        // Calcul du score en fonction des tentatives restantes
        score += tentativesRestantes * niveaux[niveau].pointsParTentative;
        message.textContent = "Bien joué 🎉 ! Tu as deviné le nombre exact ! Clique sur le bouton ≥≥ pour passer au niveau suivant.";
        body.style.background = "linear-gradient(to right, #1D976C, #93F9B9)";
        tenta.style.display = "none";
        positionCarte.style.height = "400px";
        imgCarte.style.marginTop = "10px";
        endOfGame();
    } else if (tentativesRestantes === 0) {
        message.textContent = `Dommage ! Le nombre à trouver était ${nombreSecret}. Clique sur le bouton pour recommencer.`;
        body.style.background = "linear-gradient(to left, #ee9ca7, #ffdde1)";
        tenta.style.display = "none";
        positionCarte.style.height = "400px";
        imgCarte.style.marginTop = "10px";
        endOfGame();
    } else if (proposition < nombreSecret) {
        message.textContent = `C'est plus grand que ${proposition} !`;
    } else {
        message.textContent = `C'est plus petit que ${proposition} !`;
    }

    guessInput.value = "";
}

function endOfGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
    resetButton.style.display = "inline";
    nextLevelButton.style.display = (tentativesRestantes > 0 && guessInput.disabled) ? "inline" : "none";
    resetButton.style.padding = "10px 20px";
    resetButton.style.backgroundColor = "burlywood";
    resetButton.style.boxShadow = "5px 5px 10px gray";
    resetButton.style.zIndex = "10";
    nextLevelButton.style.padding = "10px 20px";
    nextLevelButton.style.backgroundColor = "burlywood";
    nextLevelButton.style.boxShadow = "5px 5px 10px gray";
    nextLevelButton.style.zIndex = "100";
    resetButton.style.borderRadius = "10px";
    resetButton.style.marginTop = "50px";
    imgCarte.style.transform = "rotateY(190deg)";
    imgCarte.style.transition = "transform 2s";
    resetButton.style.transform = "rotateY(190deg)";
    resetButton.style.transition = "transform 2s";
    scoreDisplay.textContent = `Score : ${score}`;
}

// Fonction pour passer au niveau suivant
function nextLevel() {
    const niveauxOrdre = ["facile", "moyen", "difficile"];
    const indexNiveau = niveauxOrdre.indexOf(niveau);

    if (indexNiveau < niveauxOrdre.length - 1) {
        niveau = niveauxOrdre[indexNiveau + 1];
        alert(`Félicitations ! Tu es passé au niveau ${niveau.toUpperCase()} !`);
        // message.textContent = `Félicitations ! Tu es passé au niveau ${niveau.toUpperCase()} !`;
        gameStart();
    } else {
        alert("Félicitations! Tu as terminé tous les niveaux disponibles!");
        // message.textContent = "Bravo ! Tu as terminé tous les niveaux disponibles !";
        // nextLevelButton.style.display = "none";
    }
}

nextLevelButton.addEventListener("click", nextLevel);
// Permet de recommencer le jeu lorsque l'utilisateur clique sur le bouton recommencer
resetButton.addEventListener("click", () => {
    niveau = "facile";
    score = 0;
    gameStart();
});

document.getElementById("guessForm").addEventListener("submit", checkProposition);


gameStart();
