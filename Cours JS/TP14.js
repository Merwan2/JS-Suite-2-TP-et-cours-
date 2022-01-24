const tb = prompt("Entrer le nombre de valeurs dans le tableau");
const table = [];
var max = 0
var min = 0


for (let i = 0; i < tb; i++) table.push(prompt("Entrer une valeur"));

for (let j = 0; j < table.length; j++) {

  function valeur_max(table){
        var max=0;
    for (i in table) if(table[i]>max) max=table[i];
    return max;
}
max=valeur_max(table);
alert(max)

 function valeur_min(table) {
   var min = 0;
   for (i in table) if(table[i] < min) min = table[i];
   return min;
 }
 min = valeur_min(table);
 alert(min);
}