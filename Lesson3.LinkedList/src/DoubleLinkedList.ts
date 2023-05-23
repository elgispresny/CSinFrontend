import Link from "./Link";
export default class DoubleLinkedList {

    first: Link;
    last: Link;

    constructor(){

        this.first = null;
        this.last = null;
    }

    isEmpty(): boolean {
        return this.first === null;
    };

    insertForward(link: Link): void {

        if (this.isEmpty()) {
            this.last = link;
        }

        else {
            this.first.previous = link;
        }
        link.next = this.first;
        this.first = link;
    }

    insertBackward(link: Link): void {

        if (this.isEmpty()) {            
            this.first = link;
        }

        else {
            this.last.next = link;
        }
        link.previous = this.last;
        this.last = link;
    }

    displayFromFirst() {

        let current = this.first;
        while (current != null) {
            console.log(current.data + " ");
            current = current.next;
        }
    }

    displayFromLast() {

        let current = this.last;
        while (current != null) {
            console.log(current.data + " ");
            current = current.previous;
        }
    }
}