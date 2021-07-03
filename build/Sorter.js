"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void; 
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var k = 0; k < length - i - 1; k++) {
                if (this.compare(k, k + 1)) {
                    this.swap(k, k + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
