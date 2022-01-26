class Etudiants {
constructor (Nom, Prenom, Age, Genre, Pays, Option, Cours) {
  this.Nom = Nom;
  this.Prenom = Prenom;
  this.Genre = Genre;
  this.Age = Age;
  this.Pays = Pays;
  this.Option = Option;
  this.Cours = Cours;
}
}

const Etudiant1 = new Etudiants("Nom1","Prenom1","Genre1","Age1","Pays1","Option1","Cours1");
Etudiant1.Prenom = "qqch";
Etudiant1.Option = "qqch";
Etudiant1.Nom = "qqch";

function Inscription(Etudiants) {
}

