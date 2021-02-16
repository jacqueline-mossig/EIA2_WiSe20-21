namespace Fireworks {
    export function canvasRendering(): void {
        let canvasRocketOne: HTMLCanvasElement | null = document.querySelector("canvas#rocketOne");
        if (!canvasRocketOne)                                                              
                return;
        crc2 = <CanvasRenderingContext2D>canvasRocketOne.getContext("2d");
    }
    
    export function changeColorRocket(): string {
        canvasRendering();
        let colorRocket: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorRocket");
        crc2.fillStyle = colorRocket.value;
        colorOfRocket = colorRocket.value;
        return colorOfRocket;
    }

    export function changeSizeRocket(): void {
        let sizeRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeRocket");
        let amountSizeRocket: number = parseFloat(sizeRocket.value);
        radiusOfRocket = amountSizeRocket;
    }

    export function changeExplosionRocket(): void {
        let explosionRadiusRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#explosionRadiusRocket");
        let amountExplosionRadiusRocket: number = parseFloat(explosionRadiusRocket.value);
        explosionOfRocket = amountExplosionRadiusRocket;
    }

    export function changeColorParticle(): string {
        canvasRendering();
        let colorParticle: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorParticle");
        crc2.fillStyle = colorParticle.value;
        colorOfParticle = colorParticle.value;
        return colorOfParticle;
    }
    
    export function changeSizeParticle(): void {
        let sizeParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeParticle");
        let amountSizeParticle: number = parseFloat(sizeParticle.value);
        radiusOfParticle = amountSizeParticle;
    }

    export function changeNumberParticle(): void {
        let numberOfParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#numberParticle");
        let amountNumberParticle: number = parseFloat(numberOfParticle.value);
        numberOfParticles = amountNumberParticle;
    }

    export function changeLifetimeParticle(): void {
        let lifetimeParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#lifetimeParticle");
        let amountLifetimeParticle: number = parseFloat(lifetimeParticle.value);
        lifeOfParticle = amountLifetimeParticle;
    }
}