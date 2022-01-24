const email = prompt("Entrez email");
const mdp = prompt("Entrez mot de passe");
const mail = prompt("Confirmer mail");
const mdp2 = prompt("Confirmer mdp");
if (email != mail || mdp != mdp2) {
  alert("Email et/ou mot de passe incorrects");
  const email = prompt("Entrez email");
  const mdp = prompt("Entrez mot de passe");
} else {
  alert("Bienvenue dans votre espace client");
}

