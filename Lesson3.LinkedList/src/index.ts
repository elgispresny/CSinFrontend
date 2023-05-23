import Link from "./Link";
import DoubleLinkedList from "./DoubleLinkedList";

let list = new DoubleLinkedList();

//list.insertForward(new Link(1));
//list.insertForward(new Link(2));
//list.insertForward(new Link(3));
//list.insertForward(new Link(4));

//list.displayFromFirst();
//console.log(list.first.data + " " + list.first.next.data + " " + list.first.next.next.data + " " + list.last.data + " " + list.last.previous.data);

list.insertBackward(new Link(1));
list.displayFromFirst();
