const age = parseInt(prompt("Age : "));

if (age >= 7 && age <= 9) {
  alert("Vous êtes en Poussin");
} else if (age >= 10 && age <= 11) {
  alert("Vous êtes en Pupille");
} else if (age >= 12 && age <= 13) {
  alert("Vous êtes en Benjamin");
} else if (age >= 14 && age <= 15) {
  alert("Vous êtes en minime");
} else if (age >= 16 && age <= 17) {
  alert("Vous êtes en cadet");
} else {
  alert("Vous n'entrez dans aucune classe");
}

