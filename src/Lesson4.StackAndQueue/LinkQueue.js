"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedList_1 = require("../Lesson3.LinkedList/DoubleLinkedList");
var LinkQueue = /** @class */ (function () {
    function LinkQueue() {
        this.doubleLinkedList = new DoubleLinkedList_1.default();
    }
    LinkQueue.prototype.isEmpty = function () {
        return this.doubleLinkedList.isEmpty();
    };
    LinkQueue.prototype.push = function (link) {
        this.doubleLinkedList.insertForward(link);
    };
    LinkQueue.prototype.pop = function () {
        return this.doubleLinkedList.deleteLast();
    };
    LinkQueue.prototype.head = function () {
        return this.doubleLinkedList.getLast();
    };
    LinkQueue.prototype.display = function () {
        this.doubleLinkedList.displayFromLast();
    };
    return LinkQueue;
}());
exports.default = LinkQueue;
