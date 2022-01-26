const rayon = document.querySelector("#rayon");
const diametre = document.querySelector("#diametre");
const circonf = document.querySelector("#circonf");
const aire = document.querySelector("#aire");
const btnSubmit = document.querySelector("#btnSubmit");

// Err fields
const errRayon = document.querySelector("#err_rayon");
const errdiametre = document.querySelector("#err_diametre");
const errcirconf = document.querySelector("#err_circonf");
const erraire = document.querySelector("#err_aire");

btnSubmit.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log("rayon : ", rayon.value);
  console.log("diametre : ", diametre.value);
  console.log("circonf : ", circonf.value);

  if (rayon.value === "") {
    errRayon.innerText = "Veuillez saisir le rayon";
    errRayon.classList.add("err");
  } else {
    errRayon.innerText = "";
    errRayon.classList.remove("err"); 
 let valueRayon = parseFloat(rayon.value)
    diametre.value = 2*valueRayon;
    circonf.value = 3.14*2*valueRayon;
    aire.value = 3.14 * valueRayon * valueRayon;
  }
  }
