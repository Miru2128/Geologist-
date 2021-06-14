class sand{
    constructor(x,y,r){
        var options = {
            restitution: 1.3,
            friction: 5,
            density: 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        World.add(world, this.body);
    }

    display(){

        var sandPos=this.body.position;

        push();
        translate(sandPos.x, sandPos.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("orange");
        ellipse(0,0,this.r, this.r);
        pop();
    }
}