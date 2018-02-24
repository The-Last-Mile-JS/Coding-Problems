/*
Stack

Instructions: Create a Stack with two functions:
1. Push a value to the end of the stack
2. Pop a value off the end of the stack
3. Return the length of the stack
4. Print the current stack
*/

function Stack() {
    this.stack = [];
    this.count = 0;
}

Stack.prototype.push = function(data) {
    this.stack.push(data);
    this.count ++;
};

Stack.prototype.pop = function () {
    if (this.count === 0) {
        return null;
    }

    this.count --;
    return this.stack.pop();
}

Stack.prototype.size = function () {
    return this.count;
}

Stack.prototype.print = function () {
    console.log(this.stack.join(" "))

}


let stack = new Stack();

stack.push("R");
stack.push(2);
stack.push("D");
stack.push(2);
stack.print(); // => R 2 D 2
stack.pop();
console.log('Is Size equal to 3?', stack.size()); // => 4
stack.print(); // => R 2 D
