
function afficherResultat (score, nbMotsProposes){
    console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function choisirPhrasesOuMots (){
    // On demande de chosir une option , tant que ce n'est pas le cas on recommence
    let choix = prompt("Choisissez les 'Mots' ou les 'Phrases'.")
    while (choix !== "Mots" && choix !== "Phrases" ) {
        choix = prompt("Choisissez les 'Mots' ou les 'Phrases'.");
    }
    return choix
}

function lancerBoucleDeJeu (listePropositions){
        let score = 0
        for (let i = 0; i < listePropositions.length; i++) {
            let motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i])
            if (motUtilisateur === listePropositions[i] ) {
                score++
            }
        }
        return score
    } 


function lancerJeu(){
    let choix =  choisirPhrasesOuMots();
    let score = 0
    let nbMotsProposes =0
    if(choix === 'Mots'){
        score = lancerBoucleDeJeu(listeMots)
          nbMotsProposes = listeMots.length
    }else {
       score = lancerBoucleDeJeu(listePhrases)
          nbMotsProposes = listePhrases.length
    }

  afficherResultat(score, nbMotsProposes)
}



