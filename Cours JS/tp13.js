const tb = prompt("Entrer le nombre de valeurs dans le tableau");
const table = [];
let sum = 0;
let med = 0;

for (let i = 0; i < tb; i++) table.push(prompt("Entrer une valeur"));

for (let j = 0; j < table.length; j++) {
  sum += parseInt(table[j]);
}
console.log(sum);
alert(sum);

med = sum/table.length
alert(med)