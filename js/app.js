'use strict';


// GLOBALS
let productArray = [];
let votingRounds = 25;


// DOM WINDOWS
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');

// CONSTRUCTOR
function Product(name, fileExtension = 'jpg') {
    this.name = name;
    this.image = `img/${name}.${fileExtension}`;
    this.votes = 0;
    this.views = 0;
}



// HELPER FUNCTIONS-UTILITIES 

function renderImg() {
    let imgOneIndex = randomIndex();
    let imgTwoIndex = randomIndex();

    // imgOne.src = productArray[randomIndex()].image;
    // imgTwo.src = productArray[randomIndex()].image;

    // COMPARE IMG 1 AND 2 AND RANDOMIZE IF SAME
    while(imgOneIndex === imgTwoIndex) {
        imgTwoIndex = randomIndex();
    }

    imgOne.src = productArray[imgOneIndex].image;
    imgOne.title = productArray[imgOneIndex].name;
    imgOne.alt = `this is an image of ${productArray[imgOneIndex].name}`;
    imgTwo.src = productArray[imgTwoIndex].image;
    imgOne.title = productArray[imgTwoIndex].name;
    imgTwo.alt = `this is an image of ${productArray[imgTwoIndex].name}`;

    // INCREASE VIEWS

    productArray[imgOneIndex].views++;
    productArray[imgTwoIndex].views++;
}

function randomIndex() {
    return Math.floor(Math.random() * productArray.length);
}

function handleImgClick(event) {
    let imgClicked = event.target.title;
    console.dir(imgClick);

    for(let i = 0; i < productArray.length; i++) {
        if(imgClicked === productArray[i].name) {
                productArray[i].votes++;
        }
    }

    votingRounds--;

    renderImg();

    if(votingRounds === 0) {
        imgContainer.removeEventListener('click', handleImgClick);
    }
}

function handleShowResults() {
    if(votingRounds === 0) {
        for(let i =0; i < productArray.length; i++) {
            let productListItem = document.createElement('li');
            productListItem.textContent = `${productArray[i].name}: Views: ${productArray[i].views} & Votes: ${productArray[i].votes}`;
            resultsList.appendChild(goatListItem);
        }
        resultsBtn.removeEventListener('click', handleShowResults);
    }
}

// EXECUTABLES


let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogduck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petsweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep');
let tauntaun = new Product('tauntaun',);
let unicorn = new Product('unicorn');
let watercan = new Product('water-can');
let wineglass = new Product('wine-glass');

productArray.push(bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogduck,dragon,pen,petsweep,scissors,shark,sweep,tauntaun,unicorn,watercan,wineglass);


renderImg();

imgContainer.addEventListener('click', handleImgClick);