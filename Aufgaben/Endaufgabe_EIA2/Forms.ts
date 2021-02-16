namespace Fireworks {

    export class Circle extends Vector { 

        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number, _velocity?: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            // this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }

        draw(): void {
            crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false);
            crc2.stroke();
            crc2.closePath();
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
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

        getType(): string {
            return "Circle";
        }
    }

    export class Heart extends Vector { 

        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }

        draw(): void {
            crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            crc2.beginPath();
            crc2.bezierCurveTo(this.position.x + 25, this.position.y + 12, this.position.x + 20, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x - 30, this.position.y, this.position.x - 30, this.position.y + 37.5, this.position.x - 30, this.position.y + 37.5);
            crc2.bezierCurveTo(this.position.x - 30, this.position.y + 55, this.position.x - 10, this.position.y + 77, this.position.x + 25, this.position.y + 95);
            crc2.bezierCurveTo(this.position.x + 60, this.position.y + 77, this.position.x + 80, this.position.y + 55, this.position.x + 80, this.position.y + 37.5);
            crc2.bezierCurveTo(this.position.x + 80, this.position.y + 37.5, this.position.x + 80, this.position.y, this.position.x + 50, this.position.y);
            crc2.bezierCurveTo(this.position.x + 30, this.position.y, this.position.x + 25, this.position.y + 12, this.position.x + 25, this.position.y + 15);
            crc2.stroke();
            crc2.closePath();
            // crc2.scale(this.size, this.size);
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
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

        getType(): string {
            return "Heart";
        }
    }

    export class Triangular extends Vector { 

        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }

        draw(): void {
            crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 30, this.position.y + 60);
            crc2.lineTo(this.position.x + 30, this.position.y + 60);
            crc2.stroke();
            crc2.closePath();
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
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

        getType(): string {
            return "Triangular";
        }
    }

    export class Rectangular extends Vector { 

        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }

        draw(): void {
            crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 150, 150);
            crc2.stroke();
            crc2.closePath();
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
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

        getType(): string {
            return "Rectangular";
        }
    }

    export class Star extends Vector { 

        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }

        draw(): void {
            crc2.strokeStyle = "rgba(1, 1, 1, 0)";
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 33, this.position.y + 70);
            crc2.lineTo(this.position.x + 100, this.position.y + 78.3);
            crc2.lineTo(this.position.x + 54, this.position.y + 131);
            crc2.lineTo(this.position.x + 67, this.position.y + 205);
            crc2.lineTo(this.position.x, this.position.y + 170);
            crc2.lineTo(this.position.x - 66.8, this.position.y + 205);
            crc2.lineTo(this.position.x - 53, this.position.y + 131);
            crc2.lineTo(this.position.x - 107, this.position.y + 78);
            crc2.lineTo(this.position.x - 33, this.position.y + 68);
            crc2.lineTo(this.position.x, this.position.y);
            crc2.stroke();
            crc2.closePath();
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
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

        getType(): string {
            return "Star";
        }
    }
}