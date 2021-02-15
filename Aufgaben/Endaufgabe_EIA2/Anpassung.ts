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

    export function changeFormRocket(): string {
        canvasRendering();
        let formRocket: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formRocket");
        crc2.strokeStyle = formRocket.value;
        formOfRocket = formRocket.value;
        return formOfRocket;
    }

    export function changeSizeRocket(): void {
        // canvasRendering();
        let sizeRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeRocket");
        let amount: number = parseFloat(sizeRocket.value);
        radiusRocket = amount;
    }

    export function changeExplosionRocket(): void {
        // canvasRendering();
        let explosionRadiusRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#explosionRadiusRocket");
        let amount: number = parseFloat(explosionRadiusRocket.value);
        explosionRocket = amount;
    }

    export function changeColorParticle(): string {
        canvasRendering();
        let colorParticle: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorParticle");
        crc2.fillStyle = colorParticle.value;
        colorOfParticle = colorParticle.value;
        return colorOfParticle;
    }

    export function changeFormParticle(): string {
        let formParticle: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formParticle");
        crc2.strokeStyle = formParticle.value;
        formOfParticle = formParticle.value;
        return formOfParticle;
    }
    
    export function changeSizeParticle(): void {
        // canvasRendering();
        let sizeParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeParticle");
        let amount: number = parseFloat(sizeParticle.value);
        radiusRocket = amount;
    }

    export function changeNumberParticle(): void {
        // canvasRendering();
        let numberParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#numberParticle");
        let amount: number = parseFloat(numberParticle.value);
        numberParticles = amount;
    }

    export function changeLifeParticle(): void {
        // canvasRendering();
        let lifetimeParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#lifetimeParticle");
        let amount: number = parseFloat(lifetimeParticle.value);
        lifeParticle = amount;
    }
}