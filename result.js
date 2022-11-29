
function discover(key) {    
    const targets = fetch('./data.json')
                    .then((response) => response.json())
                    .then((json) => json);
    let t = JSON.parse(targets);
    console.log(t);
    document.write('Votre cible est : '+ target);
    
}

function check() {
    const value = document.querySelector('#name').value;
    if (calcSHA1(value) == user) {
        discover(calcSHA1(value));
    } else {
        document.querySelector('.error').innerHTML = "Oups, ce n'est pas la valeur attendue";
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('n')

const validateButton = document.querySelector(".validate");
validateButton.addEventListener('click', check);
