"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.first = null;
        this.last = null;
    }
    DoubleLinkedList.prototype.isEmpty = function () {
        return this.first === null;
    };
    ;
    DoubleLinkedList.prototype.insertForward = function (link) {
        if (this.isEmpty()) {
            this.last = link;
        }
        else {
            this.first.previous = link;
        }
        link.next = this.first;
        this.first = link;
    };
    DoubleLinkedList.prototype.insertBackward = function (link) {
        if (this.isEmpty()) {
            this.first = link;
        }
        else {
            this.last.next = link;
        }
        link.previous = this.last;
        this.last = link;
    };
    DoubleLinkedList.prototype.displayFromFirst = function () {
        var current = this.first;
        while (current != null) {
            console.log(current.data + " ");
            current = current.next;
        }
    };
    DoubleLinkedList.prototype.displayFromLast = function () {
        var current = this.last;
        while (current != null) {
            console.log(current.data + " ");
            current = current.previous;
        }
    };
    DoubleLinkedList.prototype.deleteFirst = function () {
        var temp = this.first;
        if (this.first.next = null) {
            this.last = null;
        }
        else {
            this.first.next.previous = null;
        }
        this.first = this.first.next;
        return temp;
    };
    DoubleLinkedList.prototype.deleteLast = function () {
        var temp = this.last;
        if (this.first.next = null) {
            this.first = null;
        }
        else {
            this.last.previous.next = null;
        }
        this.last = this.last.previous;
        return temp;
    };
    DoubleLinkedList.prototype.getLast = function () {
        return this.last;
    };
    return DoubleLinkedList;
}());
exports.default = DoubleLinkedList;
