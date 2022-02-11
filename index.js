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
    animals.forEach(animal => {
        animal.update();
        animal.display();
        if (animal.hunger <= 0){
            animals.splice(animals.indexOf(animal), 1);
        }
    });
}

function populate(){
    for(let i = 0; i < 50; i++){
        let x = random(width);
        let y = random(height);
        animal = new Animal(x, y, random(-1, 1), random(-1, 1), random(100));
        animals.push(animal);
    }
}