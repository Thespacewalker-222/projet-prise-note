function alerte() {
    alert("Le quiz arrive bientôt ! Prépare-toi 📘");
}

let score = 0; // Initialiser le score

// Tableau des questions
const questions = [
    {
        question: "Quel est l’objectif principal de la méthode Cornell ?",
        answers: [
            "Créer des fiches colorées",
            "Organiser ses notes pour mieux réviser",
            "Dessiner des schémas mentaux"
        ],
        correctIndex: 1
    },
    {
        question: "Quel outil est souvent utilisé pour prendre des notes en mode visuel ?",
        answers: [
            "La carte mentale",
            "La calculatrice",
            "Le surligneur uniquement"
        ],
        correctIndex: 0
    },
    {
        question: "Quel est un bon conseil pour bien prendre des notes ?",
        answers: [
            "Écrire tout mot pour mot",
            "Écouter, reformuler et synthétiser",
            "Attendre la fin du cours pour noter"
        ],
        correctIndex: 1
    },
    {
        question: "Qu’est-ce qu’un résumé efficace ?",
        answers: [
            "Une copie du texte original",
            "Un condensé avec les idées principales",
            "Un texte avec des détails inutiles"
        ],
        correctIndex: 1
    },
    {
        question: "Quelle méthode est idéale pour réviser ses notes après un cours ?",
        answers: [
            "Les relire plusieurs fois",
            "Les revoir et faire des cartes mentales",
            "Les oublier jusqu'à l'examen"
        ],
        correctIndex: 1
    },
    {
        question: "Quel type de prise de notes est adapté pour les conférences ?",
        answers: [
            "Des notes manuscrites uniquement",
            "Des schémas et des mots-clés",
            "Ne pas prendre de notes, écouter uniquement"
        ],
        correctIndex: 1
    },
    {
        question: "Quel est l’avantage de la méthode de prise de notes par carte mentale ?",
        answers: [
            "Elle permet de structurer les informations visuellement",
            "Elle permet d'écrire de manière plus rapide",
            "Elle est moins efficace que la méthode Cornell"
        ],
        correctIndex: 0
    },
    {
        question: "Quelle méthode de prise de notes permet de mieux synthétiser des informations complexes ?",
        answers: [
            "La méthode par liste",
            "La méthode de prise de notes linéaire",
            "La méthode de la carte mentale"
        ],
        correctIndex: 2
    },
    {
        question: "Pour mieux comprendre un cours, quel conseil est le plus utile ?",
        answers: [
            "Écrire les détails à chaque phrase",
            "Réécrire le cours mot pour mot",
            "Saisir l'idée principale et les exemples clés"
        ],
        correctIndex: 2
    }
];

let currentQuestionIndex = 0;

// Afficher une question
function showQuestion() {
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    const feedback = document.getElementById("quiz-feedback");
    const nextButton = document.getElementById("next-button");
  
    // Nettoyer l'affichage
    answerButtons.innerHTML = "";
    feedback.textContent = "";
    nextButton.style.display = "none";
  
    const current = questions[currentQuestionIndex];
    questionText.textContent = current.question;
  
    current.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.style.display = "block";
      button.style.margin = "8px 0";
      button.onclick = () => checkAnswer(index);
      answerButtons.appendChild(button);
    });
  
    // Mettre à jour la barre de progression
    let progressBar = document.getElementById("progress");
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}


function checkAnswer(selectedIndex) {
    const feedback = document.getElementById("quiz-feedback");
    const nextButton = document.getElementById("next-button");
    const current = questions[currentQuestionIndex];

    // Affichage du feedback
    if (selectedIndex === current.correctIndex) {
        feedback.textContent = "✅ Bonne réponse !";
        feedback.style.color = "white";
        feedback.style.backgroundColor = "green";
        score++; // Incrémenter le score
    } else {
        feedback.textContent = "❌ Mauvaise réponse.";
        feedback.style.color = "white";
        feedback.style.backgroundColor = "red";
    }

    // Désactiver les boutons après réponse et ajouter un effet visuel
    const buttons = document.querySelectorAll("#answer-buttons button");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn === buttons[current.correctIndex]) {
            btn.style.backgroundColor = "green"; // Bonne réponse
        } else {
            btn.style.backgroundColor = "red"; // Mauvaise réponse
        }
    });

    nextButton.style.display = "block"; // Montrer le bouton pour passer à la question suivante
}
document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Ajouter le score à la fin du quiz
        document.getElementById("quiz-container").innerHTML = `
            <h3>🎉 Bravo ! Tu as terminé le quiz.</h3>
            <p>Ton score : ${score} / ${questions.length}</p>
            <p>Tu peux maintenant revoir les bonnes réponses si besoin.</p>
        `;
    }
});


// Lancer le quiz au chargement
window.onload = showQuestion;

const astuces = [
    "Utilise des symboles (→, +, -) pour aller plus vite en écrivant.",
    "Relis tes notes dans les 24h pour mieux les mémoriser.",
    "Laisse de l’espace pour ajouter des remarques plus tard.",
    "Utilise des couleurs ou surligne les idées clés.",
    "Teste la méthode Cornell pour mieux structurer ton contenu."
];

function changerAstuce() {
    const conseil = document.getElementById("conseil");
    const index = Math.floor(Math.random() * astuces.length);
    conseil.textContent = "Astuce du jour : " + astuces[index];
}


changerAstuce(); // Affiche une astuce automatiquement au chargement
