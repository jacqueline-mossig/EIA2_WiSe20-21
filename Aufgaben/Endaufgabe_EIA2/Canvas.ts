namespace Fireworks {

    export let crc2: CanvasRenderingContext2D;
    export let colorOfRocket: string = "#ff0000";
    export let formOfRocket: Vector[];
    export let radiusOfRocket: number = 10;
    export let explosionOfRocket: number = 40;
    export let colorOfParticle: string = "#ffff66";
    export let formOfParticle: Vector[];
    export let radiusOfParticle: number = 1;
    export let numberOfParticles: number = 10;
    export let lifeOfParticle: number = 5;
    export let positionRocket: Vector[] = [];
    export let symbols: Vector[] = [];
    export let formtypeRocket: string;
    export let formtypeParticles: string;
    export let button: MouseEvent;

    export let user: string = getUserName();
    export let counter: number = 0;
    export let animation: boolean = false;

    export let canvasWidth: number = 1000;
    export let canvasHeight: number = 400;

    window.addEventListener("load", fitInput);
    username();

    function fitInput(): void {
        let colorRocket: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorRocket");
        colorRocket.addEventListener("change", changeColorRocket);
        let radiusRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeRocket");
        radiusRocket.addEventListener("input", changeSizeRocket);
        let explosionRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#explosionRadiusRocket");
        explosionRocket.addEventListener("input", changeExplosionRocket);

        let colorOfParticle: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorParticle");
        colorOfParticle.addEventListener("change", changeColorParticle);
        let radiusParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeParticle");
        radiusParticle.addEventListener("input", changeSizeParticle);
        let numberParticles: HTMLInputElement = <HTMLInputElement>document.querySelector("input#numberParticle");
        numberParticles.addEventListener("input", changeNumberParticle);
        let lifeParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#lifetimeParticle");
        lifeParticle.addEventListener("input", changeLifetimeParticle);
    }

    export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 0%, 0%)");
        gradient.addColorStop(0.5, "HSL(216, 100%, 20%)");
        gradient.addColorStop(1, "HSL(216, 100%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect (0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function getUserName(): string{
        let user: string | null = prompt("Please enter your username:", "Username");
        if (user == null) {
            return "";
        }
        else {
            return user;
        }
    }
    function username(): void {
        if (user == "") {
            user = "User";
            console.log("Rockets " + user);
            console.log("Welcome " + user);
        } else {
            console.log("Rockets " + user);
            console.log("Welcome " + user);
        }
    }
}