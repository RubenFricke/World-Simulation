let animals = [];
let plantseeds = [];
let plants = [];
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

function mouseClicked(){
    plantseeds.push(new PlantSeed(mouseX, mouseY, 0.01));
}

function draw(){
    background(0);
    drawPlants();
    animals.forEach(animal => {
        animal.update();
        animal.display();
        if (animal.hunger <= 0){
            animals.splice(animals.indexOf(animal), 1);
        }
    });
}

function drawPlants(){
    plantseeds.forEach(seed => {
        seed.update();
        if(seed.germinating){
            plantseeds.splice(plantseeds.indexOf(seed), 1);
            plants.push(seed.getPlant());
        }else{
            seed.display();
        }
    });

    plants.forEach(plant => {
        plant.update();
        if(!plant.exists){
            plants.splice(plants.indexOf(plant), 1);
        }else{
            plant.display();
        }
    })
}

function populate(){
    for(let i = 0; i < 50; i++){
        let x = random(width);
        let y = random(height);
        animal = new Animal(x, y, random(-1, 1), random(-1, 1), random(100));
        animals.push(animal);
    }
}