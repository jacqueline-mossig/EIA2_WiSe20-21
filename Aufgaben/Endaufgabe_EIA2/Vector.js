"use strict";
var Fireworks;
(function (Fireworks) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        move(_timeslice) {
            return;
        }
        draw() {
            return;
        }
        getType() {
            return "";
        }
    }
    Fireworks.Vector = Vector;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Vector.js.map