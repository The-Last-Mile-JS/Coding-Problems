/*
Singly Linked List

Instructions: Create a Singly Linked List with two functions:
1. Add a value to the beginning of the list
2. Retrieve a value based on a specified position
*/



function Node(data) {
    this.data = data
    this.next = null
}

function SinglyList () {
    this.head = null
    this.length = 0

}

SinglyList.prototype.add = function(data) {
    var node = new Node(data);
    if(!this.head) {
        this.head = node;
    }
    else {
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.length ++;
}

SinglyList.prototype.get = function(position) {
    var currentNode = this.head;
    var count = 1;

    if(position > this.length || position < 0) {
        return "Position not existent"
    }
    while(count < position) {
        currentNode = currentNode.next
        count++;
    }
    return currentNode
}

SinglyList.prototype.print = function() {
  var output = "";
  var currentNode = this.head;
  while(currentNode) {
    output += currentNode.data + " -- > ";
    currentNode = currentNode.next;
  }
  console.log(output);
};


var SinglyListExample = new SinglyList;
SinglyListExample.print(); // Expected output: "" (Empty string)
SinglyListExample.add(1);
SinglyListExample.add(8);
SinglyListExample.add(3);
SinglyListExample.add(20);
SinglyListExample.print(); // Expected output: "1 -- > 8 -- > 3 -- > 20 -- > " 
