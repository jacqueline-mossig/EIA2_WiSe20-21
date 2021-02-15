"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoadTwo);
    function handleLoadTwo() {
        let rocketOneApproved = document.querySelector("button#rocketOneApproved");
        rocketOneApproved.addEventListener("click", drawRocket);
    }
    function drawRocket(_event) {
        let drawRocket = document.querySelector("canvas#rocketOne");
        drawRocket.addEventListener("click", drawFormsRocket);
        // drawExplosionRocket();
    }
    Fireworks.drawRocket = drawRocket;
    function drawFormsRocket(_event) {
        console.log("Hallo");
        let canvasRocketOne = document.querySelector("canvas#rocketOne");
        if (!canvasRocketOne)
            return;
        Fireworks.crc2 = canvasRocketOne.getContext("2d");
        //Hintergrund
        let gradient = Fireworks.crc2.createLinearGradient(0, 0, 0, Fireworks.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 0%, 0%)");
        gradient.addColorStop(0.5, "HSL(216, 100%, 20%)");
        gradient.addColorStop(1, "HSL(216, 100%, 50%)");
        Fireworks.crc2.fillStyle = gradient;
        Fireworks.crc2.fillRect(0, 0, Fireworks.crc2.canvas.width, Fireworks.crc2.canvas.height);
        console.log("Kreis");
        let circle = new Fireworks.Circle(_event, 50);
        circle.draw();
        Fireworks.symbols.push(circle);
        // //////
        // let rocketForms: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#formRocket");
        // switch (rocketForms.value) {
        //         case "CircularRocket":
        //             console.log("Kreis");
        //             let circle: Circle = new Circle(_event, 50);
        //             circle.draw();
        //             symbols.push(circle);
        //             break;
        //         case "HeartLikeRocket":
        //             console.log("Herz");
        //             let heart: Heart = new Heart (_event, 50);
        //             heart.draw();
        //             symbols.push(heart);
        //             break;
        //         case "TriangularRocket":
        //             console.log("Dreieck");
        //             let triangular: Triangular = new Triangular (_event, 50);
        //             triangular.draw();
        //             symbols.push(triangular);
        //             break;
        //         case "RectangularRocket":
        //             console.log("Viereck");
        //             let rectangular: Rectangular = new Rectangular (_event, 50);
        //             rectangular.draw();
        //             symbols.push(rectangular);
        //             break;
        //         case "StarlikeRocket":
        //             console.log("Stern");
        //             let star: Rectangular = new Rectangular (_event, 50);
        //             star.draw();
        //             symbols.push(star);
        //             break;
        //     }
        // console.log("Form gewählt");
    }
    Fireworks.drawFormsRocket = drawFormsRocket;
    // export function drawExplosionRocket(): void {
    //     console.log("Explosionsradius");
    //     let circle: Circle = new Circle (_event, 100);
    //     circle.draw();
    //     symbols.push(circle);
    // }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Tools.js.map