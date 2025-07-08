//Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.

class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase();
  }

  getResult() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'sub':
        return this.a - this.b;
      case 'mult':
        return this.a * this.b;
      case 'div':
        return this.b !== 0 ? this.a / this.b : 'cannot divid by zero';
      default:
        return 'Invalid Operation';
    }
  }
}


const calc = new Calculator(2.5, 2.5, 'add');
console.log(calc.getResult());
