namespace Fireworks {

    export class Circle extends Vector { 

        // position: Vector;
        radius: number;
        // color: string;
        velocity: Vector;
        // type: number;
        size: number;
        position: Vector;

        constructor(_event: MouseEvent, _size: number, _velocity?: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            // this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }

        draw(): void {
            console.log("Kreis gezeichnet.");
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI * 2, false);
            crc2.stroke();
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "white";
        }

        getType(): string {
            return "Circle";
        }
    }

    export class Heart extends Vector { 

        position: Vector;
        radius: number;
        color: string;
        velocity: Vector;

        constructor(_event: MouseEvent, _radius: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = radiusRocket;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.bezierCurveTo(this.position.x + 25, this.position.y + 12, this.position.x + 20, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x, this.position.y - 37.5, this.position.x, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x + -55, this.position.y - 40, this.position.x - 35, this.position.y - 18, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x - 20, this.position.y + 39.5, this.position.x, this.position.y + 17.5, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x + 30, this.position.y + 37.5, this.position.x + 30, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x + 10, this.position.y - 15, this.position.x, this.position.y - 3, this.position.x, this.position.y);
            crc2.closePath();
            crc2.fill();
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

        getType(): string {
            return "Heart";
        }
    }

    export class Triangular extends Vector { 

        position: Vector;
        radius: number;
        color: string;
        velocity: Vector;

        constructor(_event: MouseEvent, _radius: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = radiusRocket;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(90, 50);
            crc2.lineTo(100, 80);
            crc2.closePath();
            crc2.closePath();
            crc2.fill();
        }

        getType(): string {
            return "Triangular";
        }
    }

    export class Rectangular extends Vector { 

        position: Vector;
        radius: number;
        color: string;
        velocity: Vector;

        constructor(_event: MouseEvent, _radius: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = radiusRocket;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 150, 150);
            crc2.closePath();
            crc2.fill();
        }

        getType(): string {
            return "Rectangular";
        }
    }

    export class Star extends Vector { 

        position: Vector;
        radius: number;
        color: string;
        velocity: Vector;

        constructor(_event: MouseEvent, _radius: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.radius = radiusRocket;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(141, 70);
            crc2.lineTo(218, 78.3);
            crc2.lineTo(162, 131);
            crc2.lineTo(175, 205);
            crc2.lineTo(108, 170);
            crc2.lineTo(41.2, 205);
            crc2.lineTo(55, 131);
            crc2.lineTo(1, 78);
            crc2.lineTo(75, 68);
            crc2.lineTo(108, 0);
            crc2.closePath();
            crc2.fill();
        }

        getType(): string {
            return "Star";
        }
    }
}