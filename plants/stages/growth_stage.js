class GrowthStage{
    constructor(plant, growthSpeed, childSize, fullSize){
        this.plant = plant;
        this.growth = 0;
        this.growthSpeed = growthSpeed;
        this.childSize = childSize;
        this.fullSize = fullSize;
    }

    update(){
        if(this.isDone()) return;

        this.growth += this.growthSpeed;
        if(this.growth > 1) this.growth = 1;
    }

    display(){
        this.plant.displayPlant(this.growth);
    }

    isDone(){
        return this.growth == 1;
    }
}