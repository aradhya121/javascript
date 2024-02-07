function rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.area = function(length, breadth) {
        return this.length * this.breadth;
    }
};
let rectangle1 = new rectangle(5, 3);
console.log("Area of rectangle1 is", rectangle1.area());