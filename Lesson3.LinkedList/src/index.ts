import Link from "./Link";
import DoubleLinkedList from "./DoubleLinkedList";

let list = new DoubleLinkedList();

list.insertForward(new Link(1));
list.insertForward(new Link(2));
list.insertForward(new Link(3));
list.insertForward(new Link(4));

list.displayFromFirst();
