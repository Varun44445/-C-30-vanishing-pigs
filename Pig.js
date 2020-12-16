class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 225;
  }

  display(){

    if(this.body.speed<4){
    super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      tint(225,this.Visiblity);
      this.Visiblity = this.Visiblity-5;
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
};