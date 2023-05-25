import LinkQueue from "./LinkQueue";
import Link from "../Lesson3.LinkedList/Link";

let queue = new LinkQueue();

queue.push(new Link(1));
queue.push(new Link(2));
queue.push(new Link(3));
queue.push(new Link(4));

queue.display();

console.log(queue.pop());
console.log(queue.pop());

queue.display();