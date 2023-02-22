'use strict';

// GLOBALS
let productArray = [];
let votingRounds = 25;
// let votingRounds = 10;


// DOM WINDOWS
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
console.log(imgOne);
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');

// CANVAS ELEMENT FOR CHART
let ctx = document.getElementById('my-chart');

// CONSTRUCTOR
function Product(name, fileExtension = 'jpg') {
    this.name = name;
    this.image = `img/${name}.${fileExtension}`;
    this.votes = 0;
    this.views = 0;

    // productArray.push(this); **THIS IS ALSO USEABLE INSTEAD OF LISTING ALL ITEMS AT THE BOTTOM
}



// HELPER FUNCTIONS-UTILITIES 
let indexArray = [];

function renderImg() {

    
    while(indexArray.length < 6) {
        let randomNum = randomImg();
        if(!indexArray.includes(randomNum)) {
            indexArray.push(randomNum);
        }
    }
    
    console.log(indexArray);

    // let imgOneIndex = randomImg();
    // let imgTwoIndex = randomImg();
    // let imgThreeIndex = randomImg();

    // COMPARE IMG 1 AND 2 AND RANDOMIZE IF SAME
    // while(imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    //     imgTwoIndex = randomImg();
    //     imgThreeIndex = randomImg();
    // }

    let imgOneIndex = indexArray.pop();
    let imgTwoIndex = indexArray.pop();
    let imgThreeIndex = indexArray.pop();


    imgOne.src = productArray[imgOneIndex].image;
    imgOne.title = productArray[imgOneIndex].name;
    imgOne.alt = `this is an image of ${productArray[imgOneIndex].name}`;

    imgTwo.src = productArray[imgTwoIndex].image;
    imgTwo.title = productArray[imgTwoIndex].name;
    imgTwo.alt = `this is an image of ${productArray[imgTwoIndex].name}`;

    imgThree.src = productArray[imgThreeIndex].image;
    imgThree.title = productArray[imgThreeIndex].name;
    imgThree.alt = `this is an image of ${productArray[imgTwoIndex].name}`;

    // INCREASE VIEWS

    productArray[imgOneIndex].views++;
    productArray[imgTwoIndex].views++;
    productArray[imgThreeIndex].views++;
}

function randomImg() {
    return Math.floor(Math.random() * productArray.length);
}

// HELPER FUNCTION TO RENDER CHART
function renderChart() {

    let productNames = [];
    let productVotes = [];
    let productViews = [];

for (let i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].name);
    productVotes.push(productArray[i].votes);
    productViews.push(productArray[i].views)
}

    let chartObj = {
        type: 'bar',
        data: {
          labels: productNames,       
          datasets: [{
              label: '# of Votes',
              data: productVotes,
              borderWidth: 2,
              borderColor: ['black'],
              backgroundColor: ['#9ACD32']
             },
             {
              label: '# of Views',
              data: productViews, 
              borderWidth: 2,
              borderColor: ['black'],
              backgroundColor: ['#FF8C00']
            }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      };


      // 2 ARGUMENTS FOR CHART CONSTRUCTOR. CANVAS ELEMENT, CONFIG OBJ WITH PRODUCT DATA
      new Chart(ctx, chartObj);
}


// EVENT HANDLERS
function handleImgClick(event) {
    let imgClick = event.target.title;
    console.dir(imgClick);

    for(let i = 0; i < productArray.length; i++) {
        if(imgClick === productArray[i].name) {
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
      
        renderChart();

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
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun',);
let unicorn = new Product('unicorn');
let watercan = new Product('water-can');
let wineglass = new Product('wine-glass');

productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass); // THIS CAN BE REPLACED WITH THE ABOVE productArray.push(this);

console.log(productArray);

renderImg();

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);