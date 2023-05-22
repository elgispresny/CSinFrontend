import Link from "./Link";
export default class DoubleLinkedList {

    first: Link;
    last: Link;

    isEmpty(): boolean {
        return this.first === null;
    };

    insertForward(link: Link): void {

        if (this.isEmpty()) {
            this.last = link;
            this.first = link;
            this.first.next = this.last;
            this.last.previous = this.first;
        }

        else {
            this.first.previous = link;
            link.next = this.first;
            this.first = link;
        }
    }

    insertBackward(link: Link): void {

        if (this.isEmpty()) {
            this.last = link;
            this.first = link;
            this.first.next = this.last;
            this.last.previous = this.first;
        }

        else {
            this.last.next = link;
            link.previous = this.last;
            this.last = link;
        }
    }

    displayFromFirst() {

        let current = this.first;
        while (!current.next === null) {
            console.log(current.data + " ");
            current = current.next;
        }
    }
}