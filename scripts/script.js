// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = [ "Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0

let choix = prompt("Choisissez les 'Mots' ou les 'Phrases'.")

// On demande de chosir une option , tant que ce n'est pas le cas on recommence
while (choix !== "Mots" && choix !== "Phrases" ) {
    choix = prompt("Choisissez les 'Mots' ou les 'Phrases'.");
}

// Une fois sortie de la boucle while
// Lancement du jeu avec la liste de mots sinon la liste de phrases
    if (choix === "Mots") {
        for (let i = 0; i < listeMots.length; i++) {
            let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
            if (motUtilisateur === listeMots[i] ) {
                score++
            }
        }
        console.log("Votre score est de " + score + " sur 3")
    } else {
        for (let i = 0; i < listePhrases.length; i++) {
            let phraseUtilisateur = prompt('Entrez le mot : ' + listePhrases[i])
            if (phraseUtilisateur === listePhrases[i] ) {
                score++
            }
        }
        console.log("Votre score est de " + score + " sur 3")

    } 







