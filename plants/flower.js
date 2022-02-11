class Flower{
    constructor(plant,x,y,growthSpeed,rottingSpeed, childSize, fullSize, flowerColor){
        this.plant = plant;
        this.x = x;
        this.y = y;
        this.growth = 0;
        this.growthSpeed = growthSpeed;
        this.rottingSpeed = rottingSpeed;
        this.childSize = childSize;
        this.fullSize = fullSize;
        this.rot = 0;
        this.flowerColor = flowerColor;
    }

    update(){
        if(this.growth < 1){
            this.growth += this.growthSpeed;
            if(this.growth > 1) this.growth = 1;
        }else if(this.rot < 1){
            this.rot += this.rottingSpeed;
            if(this.rot > 1) this.rot = 1;
        }
    }

    display(){
        let c = this.flowerColor;
        if(this.isRotting()){
            c = lerpColor(c, color(101,67,33), this.rot);
        }
        stroke(c);
        fill(c);
        circle(this.x, this.y, this.getSize());
    }

    getSize(){
        return this.growth * (this.fullSize-this.childSize) + this.childSize;
    }

    isGrowing(){
        return this.growth < 1;
    }

    isRotting(){
        return this.rot > 0;
    }
}