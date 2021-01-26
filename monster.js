class Monster {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.3,
      }
      this.body = Bodies.rectangle(x, y, 150,150, options);
      this.width = 150
      this.height = 150;
      this.image = loadImage("Monster-01.png")
      this.image2 = loadImage ("boom.jpg");
      this.Visibility = 255
      World.add(world, this.body);
    }
    display(){
        if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0,255,0);
      image(this.image,0, 0, this.width, this.height);
      pop();
        }else{
            World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image2,this.body.position.x,this.body.position.y,150,150);
      pop();
        }
    }
  };