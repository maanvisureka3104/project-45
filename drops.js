class drops{
    constructor(x,y){
        var option={
            'isStatic' : false,
            'restitution' : 0.3,
             'friction': 0.1,
             'density': 0.1,
              }
            this.body=Bodies.circle(x,y,10,option);
            this.x=x;
            this.y=y;             
            this.radius=10;
            World.add(world,this.body);
    }

    update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,500)})
    }
    }

    display()
    {
        var pos=this.body.position;
        fill('blue');
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);    
    }

}