let nbr = prompt("Entrer un nbr entre 10 et 20 ");

if (nbr >10 && nbr < 20) {
  alert("Bienvenue dans votre espace");
}
while (nbr <= 10 || nbr >= 20) {
  if (nbr >= 20) {
    nbr = prompt("Entrer un nbr plus petit : ");
  }
  if (nbr <= 10) {
    nbr = prompt("Entrer un nbr plus grand ");
  }
  else {
    alert("Bienvenue dans votre espace")
  }
}
