
const matrice = [2, 5, 4, 4];
console.log("[" + matrice + "]");
function tableauRotation(matrice, sens, rot) {
  if (sens == "droite") {
    for (let i = 0; i < rot; i++) {
      matrice.unshift(matrice.pop());
    }
  } else if (sens == "gauche") {
       for (let i = 0; i < rot; i++) {
      matrice.push(matrice.shift());
  }
  }
  return matrice; 
}

tableau = tableauRotation(tableau, "droite", 3);
console.log("[" + tableau + "]");