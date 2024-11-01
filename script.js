
 "use strict";
 const maxTentatives = 7;
 let tentativesRestantes = maxTentatives;
 let nombreSecret = Math.floor(Math.random() * 100) + 1;
 
 const message = document.getElementById("message");
 const tentatives = document.getElementById("tentatives");
 const guessInput = document.getElementById("guessInput");
 const submitButton = document.getElementById("submitButton");
 const resetButton = document.getElementById("resetButton");
//  const carte = document.getElementById("carte");
 let body = document.querySelector("body");
 let imgCarte = document.querySelector(".carte img");
 const tenta = document.querySelector(".tenta")
 let positionCarte = document.querySelector(".position-carte");

 function gameStart() {
    tentativesRestantes = maxTentatives;
    nombreSecret 
    message.textContent = "Le jeu consiste à deviner un nombre entre 1 et 100";
    tentatives.textContent = tentativesRestantes;
    guessInput.value = "";
    guessInput.disabled = false;
    submitButton.disabled = false;
    resetButton.style.display = "none";
    // guessInput.focus();
}

function checkProposition(event) {
    event.preventDefault();

    const proposition = parseInt(guessInput.value, 10);

    if (isNaN(proposition) || proposition < 1 || proposition > 100) {
        message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
        return;
    }

    tentatives.textContent = --tentativesRestantes;

    if (proposition === nombreSecret) {
        message.textContent = "Well Done Chef 🎉🫡 ! Tu as deviné le nombre exact! C'est toi le/la meilleur(e) 🫵✨. Clique sur le bouton sur la carte pour rejouer !";
        body.style.background = "linear-gradient(to right, #1D976C, #93F9B9)";
        tenta.style.display = "none";
        positionCarte.style.height = "400px";
        imgCarte.style.marginTop = "10px";
        endOfGame();
    } else if (tentativesRestantes === 0) {
        message.textContent = ` Dommage 😲 😐 ! Le nombre a trouver était ${nombreSecret}. J'ai confiance en toi 😊 ! Clique sur le bouton sur la carte pour rejouer !`;
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
    // guessInput.focus();
}

function endOfGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
    resetButton.style.display = "inline";
    resetButton.style.padding = "10px 20px";
    resetButton.style.backgroundColor = "burlywood"
    resetButton.style.boxShadow = " 5px 5px 10px #gray ";
    resetButton.style.zIndex = "10";
    resetButton.style.borderRadius = "10px";
    resetButton.style.marginTop = "50px";
    imgCarte.style.transform = "rotateY(190deg)";
    imgCarte.style.transition = "transform 2s";
    resetButton.style.transform = "rotateY(190deg)";
    resetButton.style.transition = "transform 2s";
}

document.getElementById("guessForm").addEventListener("submit", checkProposition);

// Permet de recommencer le jeu lorsque l'utilisateur clique sur le bouton recommencer
// resetButton.addEventListener("click", gameStart ) ;

// Permet de recharger la page lorsque l'utilisateur clique sur le bouton recommencer
resetButton.addEventListener("click", () => location.reload());

gameStart();
