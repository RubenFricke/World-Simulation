let animals = []
const width = window.innerWidth;
const height = window.innerHeight;


function setup(){
        createCanvas(800, 800);
        strokeWeight(1);
        background(0);
        rectMode(CORNER);
        stroke(255);
        fill(0);
        populate();
}

function draw(){
    background(0);
    fill(255);
    textSize(32);
    for(let i = 0; i < animals.length; i++){
        animals[i].update();
        animals[i].display();
        console.log('updating animal: ' + i);
    }
}

function populate(){
    for(let i = 0; i < 50; i++){
        let x = random(width);
        let y = random(height);
        animal = new Animal(x, y, random(-1, 1), random(-1, 1), random(100));
        animals.push(animal);
    }
}