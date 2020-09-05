class Box{
    constructor(x, y){
        var options ={
            isSatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("lightgreen");
        rect(this.body.position.x, this.body.position.y, 30, 40);
    }
}