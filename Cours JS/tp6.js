let number = prompt("Entrez un nombre entre 1 et 3");

while (number <= 1 || number >= 3) {
  number = prompt("Entrez un nombre entre 1 et 3");
}
console.log(number)
