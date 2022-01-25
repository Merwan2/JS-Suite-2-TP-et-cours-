function calculDiagonal(matrice) {
  let sommeDiagonale1 = 0;
  let sommeDiagonale = 0;
  for (let i = 0; i < matrice.length; i++) {
    sommeDiagonale1 += matrice[i][i];
    sommeDiagonale = sommeDiagonale2 + matrice[i][matrice.length - i - 1];
  }

  return sommeDiagonale1 + sommeDiagonale2;
}

const matrice = [
  [2, 6, 7],
  [8, 9, 3],
  [4, 1, 5],
];
