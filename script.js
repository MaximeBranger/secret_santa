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

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function tirage() {
    let remaining_people = people.map(p => p)
    
    for (let index = 0; index < people.length; index++) {
        const someone = people[index];
        let candidates = remaining_people.filter(p => p != someone);
        let candidate = candidates.random();
        console.log(calcSHA1(someone) + '->' + candidate);
        tirageDiv.innerHTML+= 'Tirage pour '+ someone + ' effectué ! <a href="' + window.location.origin + '/u.html?n='+calcSHA1(someone)+'">Lien à partager</a> <br>';
    
        remaining_people = remaining_people.filter(p => p != candidate)
    }
}

const runButton = document.querySelector('.run');
const tirageDiv = document.querySelector('.tirage');
runButton.addEventListener('click', tirage);

console.log();