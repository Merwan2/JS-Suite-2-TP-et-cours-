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

const formation = {
  listeEleve: new Array(),
  inscriptionFormation: function (etudiant) {
    this.listeEleve.push(etudiant);
  },
  trieEleve: function (pays, prenomDerniereLettre, nomPremiereLettre, genre) {
    let listeTrie = new Array();
    let listeTemp = this.listeEleve;
    if (pays != "") {
      for (let etudiant of listeTemp) {
        if (pays == etudiant.pays) {
          listeTrie.push(etudiant);
        }
      }
    }
    if (prenomDerniereLettre != "") {
      listeTemp = listeTrie;
      listeTrie = [];
      for (let etudiant of listeTemp) {
        if (
          prenomDerniereLettre.toUpperCase() ==
          etudiant.prenom
            .toUpperCase()
            .substring(etudiant.prenom.length, etudiant.prenom.length - 1)
        ) {
          listeTrie.push(etudiant);
        }
      }
    }
    if (nomPremiereLettre != "") {
      listeTemp = listeTrie;
      listeTrie = [];
      for (let etudiant of listeTemp) {
        if (
          nomPremiereLettre.toUpperCase() ==
          etudiant.nom.toUpperCase().substring(0, 1)
        ) {
          listeTrie.push(etudiant);
        }
      }
    }
    if (genre != "") {
      listeTemp = listeTrie;
      listeTrie = [];
      for (let etudiant of listeTemp) {
        if (genre == etudiant.genre) {
          listeTrie.push(etudiant);
        }
      }
    }
    return listeTrie;
  },
};
