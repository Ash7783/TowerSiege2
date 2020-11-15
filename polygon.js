class Polygon {
    constructor(x, y) {
        var options = {
            friction: 1.0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.image = loadImage("polygon.png")
        World.add(world, this.body)
    }
    display() {
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0, 0, 50, 50)
        pop();
    }
}