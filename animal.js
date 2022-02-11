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
      if (this.x > width || this.x < 0) {
        this.xSpeed *= -1;
      }
      if (this.y > height || this.y < 0) {
        this.ySpeed *= -1;
      }
    }

    display(){
      fill(100/255*this.hunger, 100/255*this.hunger, 100/255*this.hunger);
      rect(this.x, this.y, 20, 20);
    }
}


