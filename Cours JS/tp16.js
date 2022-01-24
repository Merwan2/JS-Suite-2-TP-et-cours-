let matrice = [
  [1, 2, 3, 4],
  [4, 5, 6, 5],
  [7, 8, 9, 7],
  [7, 8, 9, 7],
];

let sumDiagonale = 0;
let sumDiagonaleReverse = 0;
for (let i = 0; i <= matrice.length - 1; i++) {
  sumDiagonale += matrice[i][i];
}

for (let i = 0; i <= matrice.length - 1; i++) {
  sumDiagonaleReverse += matrice[i].reverse()[i];
}
console.log(sumDiagonale);
console.log(sumDiagonaleReverse);
