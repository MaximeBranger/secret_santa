const people = [
    "Karim",
    "Vincent",
    "Charlotte",
    "Marine",
    "Nathan",
    "Adam",
    "Armand",
    "Alexandre",
    "Dorian",
    "Marie",
    "Marie-Céline",
    "Maxime",
    "Nicolas C",
    "Nicolas M",
    "Stéphane",
    "Valère",
    "Victorien",
    "Yannice"
]
let remaining_gifter = people.map(p => p)
let remaining_dest = people.map(p => p)

let results = {}

const runButton = document.querySelector('.run');
const validateButton = document.querySelector('.validate');
const offreP = document.querySelector('.offre');
const tirageP = document.querySelector('.tirage');
const instructionP = document.querySelector('.instruction');
const select = document.querySelector("#user");

runButton.addEventListener('click', tirage);
validateButton.addEventListener('click', next);

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function getResults() {
    console.log(results);
}

function updateSelect() {
    select.textContent = "";
    for (let index = 0; index < remaining_gifter.length; index++) { 
        const opt = document.createElement("option");
        opt.text = remaining_gifter[index];;
        select.appendChild(opt);
    }
}

function tirage() {
    const candidates = remaining_dest.filter(p => p != select.value);
    const candidate = candidates.random();
    offreP.textContent = select.value + " tu devras offrir un cadeau à ";
    tirageP.textContent = candidate;
    remaining_dest = remaining_dest.filter(p => p != candidate)
    remaining_gifter = remaining_gifter.filter(p => p != select.value)
    runButton.style.display = "none";
    select.style.display = "none";
    validateButton.style.display = "block";
    instructionP.style.display = "block";
    results[select.value] = candidate;
}

function next() {
    validateButton.style.display = "none";
    instructionP.style.display = "none";
    offreP.textContent = "";

    if (remaining_gifter.length < 1) {
        select.textContent = "";
        tirageP.textContent = "Le tirage est terminé !";
        getResults();
    } else {
        runButton.style.display = "block";
        select.style.display = "block";
        tirageP.textContent = "";
        updateSelect();
    }
}


updateSelect();