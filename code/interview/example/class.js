// class 示例

const NOMRAL_SHAPE = Symbol("shape");
const SQUARE_SHAPE = Symbol("square");
const CIRCLE_SHAPE = Symbol("circle");
const TRIANGLE_SHAPE = Symbol("triangle");
const pi = 3.14;

class Shape {
    constructor(shapeName) {
        this.shapeName = shapeName;
    }

    getShapeName() {
        return this.shapeName;
    }

    static convertNumber(n) {
        let m = parseFloat(n);
        return isNaN(m) ? 0 : m;
    }

    // 获取周长与面积的比值
    get AP() {
        return this.perimeter / this.area;
    }
}

class Square extends Shape {
    constructor(length = 1) {
        // 继承，必须调用
        super(SQUARE_SHAPE);
        
        this.length = length;
    }

    get area() {
        return Math.pow(this.length, 2);
    }
    set area(area) {
        this.length = Math.sqrt(super.convertNumber(area));
    }

    get perimeter() {
        return 4 * this.length;
    }
    set perimeter(peri) {
        this.length = super.convertNumber(peri) / 4;
    }
}

class Circle extends Shape {
    constructor(radius = 1) {
        // 继承，必须调用
        super(CIRCLE_SHAPE);
        
        this.radius = radius;
    }

    get area() {
        return Math.pow(this.radius, 2) * pi;
    }
    set area(area) {
        this.radius = Math.sqrt(super.convertNumber(area) / pi);
    }

    get perimeter() {
        return 2 * pi * this.radius;
    }
    set perimeter(peri) {
        this.radius = super.convertNumber(peri) / 2 / pi;
    }
}

class Triangle extends Shape {
    constructor(a = 1, b = 1, c = 1) {
        // 继承，必须调用
        super(TRIANGLE_SHAPE);

        if (!(a + b > c && a + c > b && b + c > a)) {
            throw "ValueError: a, b and c can't form a triangle.";
        }
        
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get area() {
        // 海伦公式
        // S*S = s(s - a)(s - b)(s - c), s = (a + b + c) / 2
        let s = this.perimeter / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }
}

console.log("%c/----  -----/", "color:#ada921");
let square = new Square(3);
console.log("形状: ", square.shapeName);
console.log("面积: ", square.area);
console.log("周长: ", square.perimeter);
console.log("面积周长比: ", square.AP);

console.log("%c/----  -----/", "color:#ada921");
let circle = new Circle(3);
console.log("形状: ", circle.shapeName);
console.log("面积: ", circle.area);
console.log("周长: ", circle.perimeter);
console.log("面积周长比: ", circle.AP);

console.log("%c/----  -----/", "color:#ada921");
try {
    let errTriangle = new Triangle(3, 3, 6);
} catch (e) {
    console.error(e);
}
let triangle = new Triangle(10, 15, 13);
console.log("形状: ", triangle.shapeName);
console.log("面积: ", triangle.area);
console.log("周长: ", triangle.perimeter);
console.log("面积周长比: ", triangle.AP);