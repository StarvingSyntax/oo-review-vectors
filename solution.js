class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y)
    }
    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y)
    }
    length(vector) {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    static distance(vector) {
        return (Math.sqrt(this.x - vector.x)**2 + (this.y - vector.y)**2)
    }
    yell() {
        return "ahhh"
    }
}


const peter = new Vec(1, 2);
console.log(peter)
console.log(peter.plus(new Vec(2, 3)));
console.log(peter.minus(new Vec(5,5)));
console.log(peter.distance())
// console.log(peter.yell())


