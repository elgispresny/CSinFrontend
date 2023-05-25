import Link from "../Lesson3.LinkedList/Link";
import DoubleLinkedList from "../Lesson3.LinkedList/DoubleLinkedList";

export default class LinkQueue {

    private doubleLinkedList: DoubleLinkedList;

    constructor() {

        this.doubleLinkedList = new DoubleLinkedList();
    }

    isEmpty(): boolean {

        return this.doubleLinkedList.isEmpty();
    }

    push(link: Link): void {

        this.doubleLinkedList.insertForward(link);
    }

    pop(): Link {

            return this.doubleLinkedList.deleteLast();
                  
    }

    head(): Link {

        return this.doubleLinkedList.getLast();
    }        

    display() {

        this.doubleLinkedList.displayFromLast();
    }
}
