export default class Link {

    data: number;
    previous: Link;
    next: Link;

    constructor(data: number) {

        this.data = data;
        this.previous = null;
        this.next = null;
    }

}