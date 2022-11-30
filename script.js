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
const tirageDiv = document.querySelector('.tirage');
const select = document.querySelector("#user");

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function getResults() {
    console.log(results);
}

function fillSelect() {
    select.innerHTML = "";
    for (let index = 0; index < remaining_gifter.length; index++) { 
        const opt = document.createElement("option");
        opt.text = remaining_gifter[index];;
        select.appendChild(opt);
    }
}

function tirage() {
    const someone = select.value;
    let candidates = remaining_dest.filter(p => p != someone);
    let candidate = candidates.random();
    tirageDiv.innerHTML = candidate;
    remaining_dest = remaining_dest.filter(p => p != candidate)
    remaining_gifter = remaining_gifter.filter(p => p != someone)
    runButton.style.display = "none";
    validateButton.style.display = "block";
    results[someone] = candidate;
}

function next() {
    validateButton.style.display = "none";

    if (remaining_gifter.length < 1) {
        select.innerHTML = "";
        tirageDiv.innerHTML = "Le tirage est terminé !";
        getResults();
    } else {
        runButton.style.display = "block";
        tirageDiv.innerHTML = "";
        fillSelect();
    }
}

runButton.addEventListener('click', tirage);
validateButton.addEventListener('click', next);

fillSelect();