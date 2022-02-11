let animals = []
const multiplier = 10;
const width = 960 * multiplier;
const height = 540 * multiplier;
let map = null
let noiseScale = 1 / 150

const ocean = '#008ddc4';
const shore = '#00a9cc';
const sand = '#eecda3';
const grass = '#7ec850';
const stone = '#676767';
const snow = '#fffafa';

function setup() {
    createCanvas(width, height);
    background(0);
    noStroke();
    populate();
    noiseDetail(5, 0.5);
    makeMap();
    drawMap();
}

function makeMap() {
    map = []
    for (let i = 0; i < width; i++) {
        map[i] = []
        for (let j = 0; j < height; j++) {
            map[i][j] = pickColor(i,j);
        }
    }
}

function pickColor(i, j) {
    let h = noise(i*noiseScale, j * noiseScale);
    let c = '#facade';
    if(h < 0.2) {
        c = ocean;
    } else if (h < 0.3 ){
        c = shore;
    } else if (h < 0.4) {
        c = sand;
    } else if(h < 0.7) {
        c = grass;
    } else if (h >= 0.7){
        c = snow;
    }

    return color(c);
}

function drawMap() {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            set(i, j, map[i][j]);
        }
    }
    updatePixels();
}

function draw() {
    animals.forEach(animal => {
        animal.update();
        animal.display();
        if (animal.hunger <= 0) {
            animals.splice(animals.indexOf(animal), 1);
        }
    });
}

function populate() {
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        animal = new Animal(x, y, random(-1, 1), random(-1, 1), random(100));
        animals.push(animal);
    }
}
