namespace Fireworks {
    window.addEventListener("load", handleLoadTwo);

    function handleLoadTwo(): void {
        let rocketOneApproved: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#rocketOneApproved");
        rocketOneApproved.addEventListener("click", drawRocket);
    }
    
    export function drawRocket(_event: MouseEvent): void {
        let drawRocket: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas#rocketOne");
        drawRocket.addEventListener("click", drawFormsRocket);
        // drawExplosionRocket();
    }
    
    export function drawFormsRocket(_event: MouseEvent): void {
        console.log("Hallo");
        let canvasRocketOne: HTMLCanvasElement | null = document.querySelector("canvas#rocketOne");
        if (!canvasRocketOne)                                                              
                return;
        crc2 = <CanvasRenderingContext2D>canvasRocketOne.getContext("2d");

         //Hintergrund
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 0%, 0%)");
        gradient.addColorStop(0.5, "HSL(216, 100%, 20%)");
        gradient.addColorStop(1, "HSL(216, 100%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect (0, 0, crc2.canvas.width, crc2.canvas.height);

        ////////

        let rocketForms: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formRocket");
        switch (rocketForms.value) {
                case "CircularRocket":
                    console.log("Kreis");
                    let circle: Circle = new Circle(_event, 50);
                    circle.draw();
                    symbols.push(circle);
                    break;
                case "HeartLikeRocket":
                    console.log("Herz");
                    let heart: Heart = new Heart (_event, 50);
                    heart.draw();
                    symbols.push(heart);
                    break;
                case "TriangularRocket":
                    console.log("Dreieck");
                    let triangular: Triangular = new Triangular (_event, 50);
                    triangular.draw();
                    symbols.push(triangular);
                    break;
                case "RectangularRocket":
                    console.log("Viereck");
                    let rectangular: Rectangular = new Rectangular (_event, 50);
                    rectangular.draw();
                    symbols.push(rectangular);
                    break;
                case "StarlikeRocket":
                    console.log("Stern");
                    let star: Rectangular = new Rectangular (_event, 50);
                    star.draw();
                    symbols.push(star);
                    break;
            }
        console.log("Form gewählt");
}

    // export function drawExplosionRocket(): void {
    //     console.log("Explosionsradius");
    //     let circle: Circle = new Circle (_event, 100);
    //     circle.draw();
    //     symbols.push(circle);
    // }
}
