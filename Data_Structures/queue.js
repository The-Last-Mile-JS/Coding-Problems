/*
Queue

Instructions: Create a Queue with two functions:
1. Enqueue a value to the Queue
2. Dequeue the first value from the Queue
3. Return the length of the Queue
4. Print the current Queue
*/

function Queue() {
    this.queue = [];
    this.count = 0;
}


Queue.prototype.enqueue = function(data) {
    this.queue.push(data);
    this.count ++;
};

Queue.prototype.dequeue = function () {
    if (this.count === 0) {
        return null;
    }

    this.count --;
    return this.queue.shift();
}

Queue.prototype.size = function () {
    return this.count;
}

Queue.prototype.print = function () {
    console.log(this.queue.join(" "))

}


let queue = new Queue();

queue.enqueue("R");
queue.enqueue(2);
queue.enqueue("D");
queue.enqueue(2);
queue.print(); // => R 2 D 2
queue.dequeue();
console.log('Is Size equal to 3?', queue.size()); // => 4
queue.print(); // => 2 D 2
