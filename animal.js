class Animal {
  constructor(x, y, xSpeed, ySpeed, hunger)
  {
      this.x = x;
      this.y = y;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
      this.hunger = hunger;
    }

    update(){
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      this.hunger -= 0.01;
    }

    display(){
      fill(map(this.hunger, 0, 100, 0, 255));
      rect(this.x, this.y, 20, 20);
    }
}


