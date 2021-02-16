"use strict";
var Fireworks;
(function (Fireworks) {
    class Circle extends Fireworks.Vector {
        constructor(_event, _size, _velocity) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            // this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }
        draw() {
            Fireworks.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            Fireworks.crc2.beginPath();
            Fireworks.crc2.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false);
            Fireworks.crc2.stroke();
            Fireworks.crc2.closePath();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x + this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + this.size) {
                this.velocity.y = -this.velocity.y;
            }
        }
        getType() {
            return "Circle";
        }
    }
    Fireworks.Circle = Circle;
    class Heart extends Fireworks.Vector {
        constructor(_event, _size) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }
        draw() {
            Fireworks.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            Fireworks.crc2.beginPath();
            Fireworks.crc2.bezierCurveTo(this.position.x + 25, this.position.y + 12, this.position.x + 20, this.position.y, this.position.x, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x - 30, this.position.y, this.position.x - 30, this.position.y + 37.5, this.position.x - 30, this.position.y + 37.5);
            Fireworks.crc2.bezierCurveTo(this.position.x - 30, this.position.y + 55, this.position.x - 10, this.position.y + 77, this.position.x + 25, this.position.y + 95);
            Fireworks.crc2.bezierCurveTo(this.position.x + 60, this.position.y + 77, this.position.x + 80, this.position.y + 55, this.position.x + 80, this.position.y + 37.5);
            Fireworks.crc2.bezierCurveTo(this.position.x + 80, this.position.y + 37.5, this.position.x + 80, this.position.y, this.position.x + 50, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x + 30, this.position.y, this.position.x + 25, this.position.y + 12, this.position.x + 25, this.position.y + 15);
            Fireworks.crc2.stroke();
            Fireworks.crc2.closePath();
            // crc2.scale(this.size, this.size);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x + this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + this.size) {
                this.velocity.y = -this.velocity.y;
            }
        }
        getType() {
            return "Heart";
        }
    }
    Fireworks.Heart = Heart;
    class Triangular extends Fireworks.Vector {
        constructor(_event, _size) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }
        draw() {
            Fireworks.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            Fireworks.crc2.beginPath();
            Fireworks.crc2.moveTo(this.position.x, this.position.y);
            Fireworks.crc2.lineTo(this.position.x - 30, this.position.y + 60);
            Fireworks.crc2.lineTo(this.position.x + 30, this.position.y + 60);
            Fireworks.crc2.stroke();
            Fireworks.crc2.closePath();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x + this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + this.size) {
                this.velocity.y = -this.velocity.y;
            }
        }
        getType() {
            return "Triangular";
        }
    }
    Fireworks.Triangular = Triangular;
    class Rectangular extends Fireworks.Vector {
        constructor(_event, _size) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }
        draw() {
            Fireworks.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            Fireworks.crc2.beginPath();
            Fireworks.crc2.rect(this.position.x, this.position.y, 150, 150);
            Fireworks.crc2.stroke();
            Fireworks.crc2.closePath();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x + this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + this.size) {
                this.velocity.y = -this.velocity.y;
            }
        }
        getType() {
            return "Rectangular";
        }
    }
    Fireworks.Rectangular = Rectangular;
    class Star extends Fireworks.Vector {
        constructor(_event, _size) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }
        draw() {
            Fireworks.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            Fireworks.crc2.beginPath();
            Fireworks.crc2.moveTo(this.position.x, this.position.y);
            Fireworks.crc2.lineTo(this.position.x + 33, this.position.y + 70);
            Fireworks.crc2.lineTo(this.position.x + 100, this.position.y + 78.3);
            Fireworks.crc2.lineTo(this.position.x + 54, this.position.y + 131);
            Fireworks.crc2.lineTo(this.position.x + 67, this.position.y + 205);
            Fireworks.crc2.lineTo(this.position.x, this.position.y + 170);
            Fireworks.crc2.lineTo(this.position.x - 66.8, this.position.y + 205);
            Fireworks.crc2.lineTo(this.position.x - 53, this.position.y + 131);
            Fireworks.crc2.lineTo(this.position.x - 107, this.position.y + 78);
            Fireworks.crc2.lineTo(this.position.x - 33, this.position.y + 68);
            Fireworks.crc2.lineTo(this.position.x, this.position.y);
            Fireworks.crc2.stroke();
            Fireworks.crc2.closePath();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x + this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + this.size) {
                this.velocity.y = -this.velocity.y;
            }
        }
        getType() {
            return "Star";
        }
    }
    Fireworks.Star = Star;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Forms.js.map