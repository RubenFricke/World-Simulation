class Plant {
  constructor(x, y, growthSpeed, childSize, fullSize, edibleFromGrowth=0.5)
  {
    this.x = x;
    this.y = y;
    this.childSize = childSize;
    this.fullSize = fullSize;
    this.growth = 0;
    this.edibleFromGrowth=edibleFromGrowth;
    this.eatedFor = 0;
    this.stages = [new GrowthStage(this, growthSpeed, childSize, fullSize),
      new FlowerStage(this)];
    this.dead = false;
  }

  currentStage(){
    if(this.stages.length == 0) return null;
    return this.stages[0];
  }

  update(){
    let stage = this.currentStage();
    if(stage == null) this.dead = true;
    else{
      stage.update();
      if(stage.isDone()){
        this.stages.shift();
      }
    }
  }

  display(){
    let stage = this.currentStage();
    if(stage == null) this.dead = true;
    else stage.display();
  }

  displayPlant(growth){
    let c = color(100,255,100);
    stroke(c);
    fill(c);
    circle(this.x, this.y, growth*(this.fullSize-this.childSize) + this.childSize);
  }

  grow(){
    this.growth += this.growthSpeed;
    if(this.growth > 1) this.growth = 1;
  }

  isEdible(){
    return this.growth >= edibleFromGrowth;
  }

  isAlive(){
    return this.eatedFor == 0;
  }

  exists(){
    return true;
  }

  newFlowerLocation(){
    return {x: (this.x + (Math.random() * 50) - 25), y: (this.y + (Math.random() * 50) - 25)};
  }

  // Returns delta food that was eaten.
  // Cannot eat more than is available.
  eat(amount){
    let beforeEating = this.eatedFor;

    this.eatedFor += amount;
    if(this.eatedFor > this.growth) this.eatedFor = this.growth;

    let afterEating = this.eatedFor;

    return afterEating-beforeEating;
  }
}


