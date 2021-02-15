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
            console.log("Kreis gezeichnet.");
            Fireworks.crc2.beginPath();
            Fireworks.crc2.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
            Fireworks.crc2.stroke();
            Fireworks.crc2.closePath();
            Fireworks.crc2.stroke();
            Fireworks.crc2.strokeStyle = "white";
        }
        getType() {
            return "Circle";
        }
    }
    Fireworks.Circle = Circle;
    class Heart extends Fireworks.Vector {
        constructor(_event, _radius) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = Fireworks.radiusRocket;
        }
        draw() {
            Fireworks.crc2.fillStyle = this.color;
            Fireworks.crc2.beginPath();
            Fireworks.crc2.bezierCurveTo(this.position.x + 25, this.position.y + 12, this.position.x + 20, this.position.y, this.position.x, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x, this.position.y - 37.5, this.position.x, this.position.y, this.position.x, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x + -55, this.position.y - 40, this.position.x - 35, this.position.y - 18, this.position.x, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x - 20, this.position.y + 39.5, this.position.x, this.position.y + 17.5, this.position.x, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x + 30, this.position.y + 37.5, this.position.x + 30, this.position.y, this.position.x, this.position.y);
            Fireworks.crc2.bezierCurveTo(this.position.x + 10, this.position.y - 15, this.position.x, this.position.y - 3, this.position.x, this.position.y);
            Fireworks.crc2.closePath();
            Fireworks.crc2.fill();
            // crc2.beginPath();
            // crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
            // crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            // crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
            // crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            // crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            // crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
            // crc2.stroke();
            // crc2.closePath();
        }
        getType() {
            return "Heart";
        }
    }
    Fireworks.Heart = Heart;
    class Triangular extends Fireworks.Vector {
        constructor(_event, _radius) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = Fireworks.radiusRocket;
        }
        draw() {
            Fireworks.crc2.fillStyle = this.color;
            Fireworks.crc2.beginPath();
            Fireworks.crc2.moveTo(this.position.x, this.position.y);
            Fireworks.crc2.lineTo(90, 50);
            Fireworks.crc2.lineTo(100, 80);
            Fireworks.crc2.closePath();
            Fireworks.crc2.closePath();
            Fireworks.crc2.fill();
        }
        getType() {
            return "Triangular";
        }
    }
    Fireworks.Triangular = Triangular;
    class Rectangular extends Fireworks.Vector {
        constructor(_event, _radius) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = Fireworks.radiusRocket;
        }
        draw() {
            Fireworks.crc2.fillStyle = this.color;
            Fireworks.crc2.beginPath();
            Fireworks.crc2.rect(this.position.x, this.position.y, 150, 150);
            Fireworks.crc2.closePath();
            Fireworks.crc2.fill();
        }
        getType() {
            return "Rectangular";
        }
    }
    Fireworks.Rectangular = Rectangular;
    class Star extends Fireworks.Vector {
        constructor(_event, _radius) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Fireworks.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Fireworks.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = Fireworks.radiusRocket;
        }
        draw() {
            Fireworks.crc2.fillStyle = this.color;
            Fireworks.crc2.beginPath();
            Fireworks.crc2.moveTo(this.position.x, this.position.y);
            Fireworks.crc2.lineTo(141, 70);
            Fireworks.crc2.lineTo(218, 78.3);
            Fireworks.crc2.lineTo(162, 131);
            Fireworks.crc2.lineTo(175, 205);
            Fireworks.crc2.lineTo(108, 170);
            Fireworks.crc2.lineTo(41.2, 205);
            Fireworks.crc2.lineTo(55, 131);
            Fireworks.crc2.lineTo(1, 78);
            Fireworks.crc2.lineTo(75, 68);
            Fireworks.crc2.lineTo(108, 0);
            Fireworks.crc2.closePath();
            Fireworks.crc2.fill();
        }
        getType() {
            return "Star";
        }
    }
    Fireworks.Star = Star;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Formen.js.map