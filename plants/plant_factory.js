class PlantFactory{
    static newPlant(x,y){
        return this.randomPlant(x,y);
    }

    static randomPlant(x,y){
        return new Plant(x,y,0.001, 5, 25, 0.5);
    }
}