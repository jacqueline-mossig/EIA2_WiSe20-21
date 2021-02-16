namespace Fireworks {
    window.addEventListener("load", handleLoadTwo);

    function handleLoadTwo(): void {
        let drawRocket: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas#showRocket");
        drawRocket.addEventListener("click", drawFormsRocket);
        // drawRocket.addEventListener("click", drawParticles);
    }
    
    export function drawFormsRocket(_event: MouseEvent): void {
        let canvasRocketOne: HTMLCanvasElement | null = document.querySelector("canvas#showRocket");
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
                    let circleRocket: Circle = new Circle(_event, radiusOfRocket);
                    crc2.fillStyle = colorOfRocket;
                    circleRocket.draw();
                    crc2.fill();
                    symbols.push(circleRocket);
                    formtypeRocket = circleRocket.getType();
                    break;
                case "HeartLikeRocket":
                    console.log("Herz");
                    let heartRocket: Heart = new Heart (_event, radiusOfRocket);
                    crc2.fillStyle = colorOfRocket;
                    heartRocket.draw();
                    crc2.fill();
                    symbols.push(heartRocket);
                    // heartRocket.scale(radiusOfRocket);
                    formtypeRocket = heartRocket.getType();
                    break;
                case "TriangularRocket":
                    console.log("Dreieck");
                    let triangularRocket: Triangular = new Triangular (_event, radiusOfRocket);
                    crc2.fillStyle = colorOfRocket;
                    triangularRocket.draw();
                    crc2.fill();
                    symbols.push(triangularRocket);
                    formtypeRocket = triangularRocket.getType();
                    break;
                case "RectangularRocket":
                    console.log("Viereck");
                    let rectangularRocket: Rectangular = new Rectangular (_event, radiusOfRocket);
                    crc2.fillStyle = colorOfRocket;
                    rectangularRocket.draw();
                    crc2.fill();
                    symbols.push(rectangularRocket);
                    formtypeRocket = rectangularRocket.getType();
                    break;
                case "StarlikeRocket":
                    console.log("Stern");
                    let starRocket: Star = new Star (_event, radiusOfRocket);
                    crc2.fillStyle = colorOfRocket;
                    starRocket.draw();
                    crc2.fill();
                    symbols.push(starRocket);
                    formtypeRocket = starRocket.getType();
                    break;
            }
        console.log("Raketenbasis");

        let circle: Circle = new Circle (_event, explosionOfRocket);
        circle.draw();
        symbols.push(circle);
        console.log("Explosionsradius gewählt");

        for (let i: number = 0; i < numberOfParticles; i++) {
        let particleForms: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formParticle");
        switch (particleForms.value) {
                case "CircularRocket":
                    let circleParticles: Circle = new Circle(_event, radiusOfParticle);
                    crc2.fillStyle = colorOfParticle;
                    circleParticles.draw();
                    crc2.fill();
                    symbols.push(circleParticles);
                    formtypeParticles = circleParticles.getType();
                    break;
                case "HeartLikeRocket":
                    console.log("Herz");
                    let heartParticles: Heart = new Heart (_event, radiusOfParticle);
                    crc2.fillStyle = colorOfParticle;
                    heartParticles.draw();
                    crc2.fill();
                    symbols.push(heartParticles);
                    formtypeParticles = heartParticles.getType();
                    break;
                case "TriangularRocket":
                    console.log("Dreieck");
                    let triangularParticles: Triangular = new Triangular (_event, radiusOfParticle);
                    crc2.fillStyle = colorOfParticle;
                    triangularParticles.draw();
                    crc2.fill();
                    symbols.push(triangularParticles);
                    formtypeParticles = triangularParticles.getType();
                    break;
                case "RectangularRocket":
                    console.log("Viereck");
                    let rectangularParticles: Rectangular = new Rectangular (_event, radiusOfParticle);
                    crc2.fillStyle = colorOfParticle;
                    rectangularParticles.draw();
                    crc2.fill();
                    symbols.push(rectangularParticles);
                    formtypeParticles = rectangularParticles.getType();
                    break;
                case "StarlikeRocket":
                    console.log("Stern");
                    let starParticles: Star = new Star (_event, radiusOfParticle);
                    crc2.fillStyle = colorOfParticle;
                    starParticles.draw();
                    crc2.fill();
                    symbols.push(starParticles);
                    formtypeParticles = starParticles.getType();
                    break;
            }
        console.log("Partikel");
        }
    }
}
