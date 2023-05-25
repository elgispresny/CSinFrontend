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

    deleteFirst(): Link {

        let temp: Link = this.first;

        if (this.first.next = null) {
            this.last = null;
        }
        else {
            this.first.next.previous = null;            
        }
        this.first = this.first.next;
        return temp;
    }

    deleteLast(): Link {

        let temp: Link = this.last;

        if (this.first.next = null) {
            this.first = null;
        }
        else {
            this.last.previous.next = null;
        }
        this.last = this.last.previous;
        return temp;
    }
}