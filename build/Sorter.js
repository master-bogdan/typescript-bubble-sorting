"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var k = 0; k < length - i - 1; k++) {
                if (this.collection.compare(k, k + 1)) {
                    this.collection.swap(k, k + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
