class PlantSeed{
    constructor(x, y, germinationChance)
    {
        this.x = x;
        this.y = y;
        this.germinationChance = germinationChance;
        this.germinating = false;
    }

    update(){
        if(Math.random() < this.germinationChance){
            this.germinate();
        }
    }

    display(){
        fill(200,255,200);
        rect(this.x,this.y,5,5);
    }

    germinate(){
        this.germinating = true;
    }

    getPlant(){
        return PlantFactory.newPlant(this.x, this.y);
    }
}