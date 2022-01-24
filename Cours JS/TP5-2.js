const email = prompt("Entrez email");
const mdp = prompt("Entrez mot de passe");
let mail = prompt("Confirmer email");
let mdp2 = prompt("Confirmer mdp");
let i = 0;

while ((email != mail || mdp != mdp2) && i < 5) {
  alert("Email et/ou mot de passe sont incorrects");
  mail = prompt("Entrez email");
  mdp2 = prompt("Entrez mdp");
  i = i + 1;

  if (i === 5) {
    alert("5 tentatives incorrects, compte bloqué”");
    break;
  }
}
if (email === mail || mdp === mdp2) {
  alert("Bienvenu dans votre espace client");
}
