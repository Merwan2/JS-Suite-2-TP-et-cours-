const fruits = ["pommes", "manges", "oranges"];
const numbers = [1, 3, 6, 7, 9, 2];
const booleans = [true, false, false, 4 > 5];

const names = [];
const noms = new Array();

//inserer à la fin//
fruits.push("ananas");

//pop : remove at the end//

fruits.pop();

//remove at the begining//

fruits.shift();

//add at the beginning//
fruits.unshift("erer");

const matrice = [[1, 2, 3][(4, 5, 6)][(7, 8, 9)]];

for(let i=0; i<matrice.length;i++) {
for (let j = 0; j < matrice.length; j++) {
    console.log(matrice[i][j])
}

}