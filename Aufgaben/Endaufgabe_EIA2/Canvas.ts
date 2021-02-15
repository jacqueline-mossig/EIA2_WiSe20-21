namespace Fireworks {

    export let crc2: CanvasRenderingContext2D;
    export let colorOfRocket: string;
    export let formOfRocket: string;
    export let radiusRocket: number;
    export let explosionRocket: number;
    export let colorOfParticle: string;
    export let formOfParticle: string;
    export let radiusParticle: number;
    export let numberParticles: number;
    export let lifeParticle: number;
    export let positionRocket: Vector[] = [];
    export let symbols: Vector[] = [];
    export let button: MouseEvent;

    export let user: string = getUserName();
    export let url: string = "https://FireworksJacqueline.herokuapp.com/";
    export let canvasWidth: number = 1000;
    export let canvasHeight: number = 400;

    window.addEventListener("load", handleLoadThree);

    function handleLoadThree(): void {
        let colorRocket: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorRocket");
        colorRocket.addEventListener("change", changeColorRocket);
        let formOfRocket: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formRocket");
        formOfRocket.addEventListener("change", changeFormRocket);
        let radiusRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeRocket");
        radiusRocket.addEventListener("input", changeSizeRocket);
        let explosionRocket: HTMLInputElement = <HTMLInputElement>document.querySelector("input#explosionRadiusRocket");
        explosionRocket.addEventListener("input", changeExplosionRocket);

        let colorOfParticle: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#colorParticle");
        colorOfParticle.addEventListener("change", changeColorParticle);
        let formOfParticle: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formParticle");
        formOfParticle.addEventListener("change", changeFormParticle);
        let radiusParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sizeParticle");
        radiusParticle.addEventListener("input", changeSizeParticle);
        let numberParticles: HTMLInputElement = <HTMLInputElement>document.querySelector("input#numberParticle");
        numberParticles.addEventListener("input", changeNumberParticle);
        let lifeParticle: HTMLInputElement = <HTMLInputElement>document.querySelector("input#lifetimeParticle");
        lifeParticle.addEventListener("input", changeLifeParticle);

        // let saveRocketsbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveRockets");
        // saveRocketsbutton.addEventListener("click", savePicture);

        username();
    }

    export function getUserName(): string {
        // tslint:disable-next-line: typedef
        let user = prompt("Please enter your username:", "Username");
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
            console.log("Feuerwerk " + user);
            console.log("Willkommen " + user);
        } else {
            console.log("Feuerwerk " + user);
            console.log("Willkommen " + user);
        }
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
}