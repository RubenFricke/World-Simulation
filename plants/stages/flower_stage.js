class FlowerStage{
    constructor(plant){
        this.plant = plant;

        let flowerLocation = plant.newFlowerLocation();
        let flowerColorTheta = parseInt(Math.random() * 360);
        this.flower = new Flower(plant, 
            flowerLocation.x, 
            flowerLocation.y, 
            0.001, 
            0.001, 
            plant.childSize, 
            plant.fullSize, 
            color('hsb(' + flowerColorTheta + ', 100%, 100%)'));
    }

    update(){
        this.flower.update();
    }

    display(){
        this.plant.displayPlant(1);
        this.flower.display();
    }

    isDone(){
        return this.flower.rot == 1;
    }
}