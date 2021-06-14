class iron{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction:3,
            density:20,
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 80;
        this.height = 50;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("gray");
        rect(0, 0, this.width, this.height);
        pop();
    }
}