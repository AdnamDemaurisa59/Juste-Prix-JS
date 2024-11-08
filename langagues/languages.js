
"use strict";

// Code JS permettant de traduire le site sous différentes langues
fetch("./langagues/languages.json")
    .then(response => response.json())
    .then(data => {
        function updateLanguage(languages) {
            const selectedLanguage = data.languages[languages];
            if (!selectedLanguage) return;  // Arrêter si la langue n'existe pas dans le JSON            
            document.getElementById("title").innerText = selectedLanguage.title;
            // document.getElementById("openPopupButton").innerText = selectedLanguage.openPopupButton;
            document.getElementById("choiceLangue").innerText = selectedLanguage.choiceLangue;
            document.getElementById("instructions").innerText = selectedLanguage.instructions;
            document.getElementById("playing").innerText = selectedLanguage.playing;
            document.getElementById("playingPara1").innerText = selectedLanguage.playingPara1;
            document.getElementById("playingPara2").innerText = selectedLanguage.playingPara2;
            document.getElementById("playingLi1").innerText = selectedLanguage.playingLi1;
            document.getElementById("playingLi2").innerText = selectedLanguage.playingLi2;
            document.getElementById("playingLi3").innerText = selectedLanguage.playingLi3;
            document.getElementById("playingPara3").innerText = selectedLanguage.playingPara3;
            document.getElementById("playingLi4").innerText = selectedLanguage.playingLi4;
            document.getElementById("playingLi5").innerText = selectedLanguage.playingLi5;
            document.getElementById("playingLi6").innerText = selectedLanguage.playingLi6;
            document.getElementById("playingLi7").innerText = selectedLanguage.playingLi7;
            document.getElementById("playingLi8").innerText = selectedLanguage.playingLi8;
            document.getElementById("playingPara4").innerText = selectedLanguage.playingPara4;
            document.getElementById("playingPara5").innerText = selectedLanguage.playingPara5;
            document.getElementById("closeButtonOverlay").innerText = selectedLanguage.closeButtonOverlay;
            document.getElementById("nbTentatives").innerText = selectedLanguage.nbTentatives;
            // document.getElementById("tentatives").innerText = selectedLanguage.tentatives;
            document.getElementById("congratulations").innerText = selectedLanguage.congratulations;
            document.getElementById("enterProposition").innerText = selectedLanguage.enterProposition;
            document.getElementById("submitButton").innerText = selectedLanguage.submitButton;
            document.getElementById("nombresTentesDisplay").innerText = selectedLanguage.nombresTentesDisplay;
            document.getElementById("message").innerText = selectedLanguage.message;
            document.getElementById("footerPara").innerText = selectedLanguage.footerPara;

            // document.getElementById("messageChangeNumber").innerText = selectedLanguage.messageChangeNumber;
            // document.getElementById("messageTimerStop").innerText = selectedLanguage.messageTimerStop;
            // document.getElementById("messageWin").innerText = selectedLanguage.messageWin;
            // document.getElementById("messageLose").innerText = selectedLanguage.messageLose;
            // document.getElementById("messageTall").innerText = selectedLanguage.messageTall;
            // document.getElementById("messageSmall").innerText = selectedLanguage.messageSmall;
            // document.getElementById("messageNextLevel").innerText = selectedLanguage.messageNextLevel;
            // document.getElementById("messageGameDone").innerText = selectedLanguage.messageGameDone;
            localStorage.setItem("preferredLanguage", languages);
        }
        console.log("Languages")
        const savedLanguage = localStorage.getItem("preferredLanguage") || navigator.languages.slice(0, 2);
        const defaultLanguage = data.languages[savedLanguage] ? savedLanguage : "fr";
        
        document.getElementById("languagesSelect").value = defaultLanguage;
        updateLanguage(defaultLanguage);

        document.getElementById("languagesSelect").addEventListener("change", (event) => {
            const selectedLanguage = event.target.value;
            updateLanguage(selectedLanguage);
        });
    })
    .catch(error => console.error("Erreur lors du chargement des données JSON :", error));