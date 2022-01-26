class Etudiant {
  constructor(nom, prenom, age, genre, pays, option, listeDesCours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.listeDesCours = listeDesCours;
  }

  setNom(nom) {
    this.nom = nom;
  }

  setPrenom(prenom) {
    this.prenom = prenom;
  }

  setOption(option) {
    this.option = option;
  }
}
let tableau1 = [];
let tableau2 = [];
let tableau3 = [];
let tableau4 = [];
let tableau5 = [];
let tableau6 = [];
function Inscription(Etudiant)

if (Etudiant.genre == "Femme" && Etudiant.pays == "Chine") {
  tableau1.push(Etudiant.nom + Etudiant.prenom);
}
if (Etudiant.prenom[Etudiant.prenom.length - 1].toUpperCase() == "A") {
  tableau2.push(Etudiant.nom + Etudiant.prenom);
}
if (Etudiant.prenom == "") {
  tableau3.push(Etudiant.nom + Etudiant.prenom);
  if (Etudiant.pays == "Russie" && Etudiant.genre == "Homme") {
    tableau4.push(Etudiant.nom + Etudiant.prenom);
  }
  if (Etudiant.prenom[0] == "K" && Etudiant.genre == "Femme") {
    tableau5.push(Etudiant.nom + Etudiant.prenom);
    if ((Etudiant.prenom[0] = "M" && Etudiant.genre == "Homme")) {
      tableau6.push(Etudiant.nom + Etudiant.prenom);
    } else {
      alert("Aucun resultat trouvé");
    }
  }
}
