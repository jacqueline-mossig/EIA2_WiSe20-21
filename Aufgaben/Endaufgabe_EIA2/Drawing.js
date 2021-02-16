"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoadTwo);
    function handleLoadTwo() {
        let drawRocket = document.querySelector("canvas#showRocket");
        drawRocket.addEventListener("click", drawFormsRocket);
        // drawRocket.addEventListener("click", drawParticles);
    }
    function drawFormsRocket(_event) {
        let canvasRocketOne = document.querySelector("canvas#showRocket");
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
        ////////
        let rocketForms = document.querySelector("select#formRocket");
        switch (rocketForms.value) {
            case "CircularRocket":
                console.log("Kreis");
                let circleRocket = new Fireworks.Circle(_event, Fireworks.radiusOfRocket);
                Fireworks.crc2.fillStyle = Fireworks.colorOfRocket;
                circleRocket.draw();
                Fireworks.crc2.fill();
                Fireworks.symbols.push(circleRocket);
                Fireworks.formtypeRocket = circleRocket.getType();
                break;
            case "HeartLikeRocket":
                console.log("Herz");
                let heartRocket = new Fireworks.Heart(_event, Fireworks.radiusOfRocket);
                Fireworks.crc2.fillStyle = Fireworks.colorOfRocket;
                heartRocket.draw();
                Fireworks.crc2.fill();
                Fireworks.symbols.push(heartRocket);
                // heartRocket.scale(radiusOfRocket);
                Fireworks.formtypeRocket = heartRocket.getType();
                break;
            case "TriangularRocket":
                console.log("Dreieck");
                let triangularRocket = new Fireworks.Triangular(_event, Fireworks.radiusOfRocket);
                Fireworks.crc2.fillStyle = Fireworks.colorOfRocket;
                triangularRocket.draw();
                Fireworks.crc2.fill();
                Fireworks.symbols.push(triangularRocket);
                Fireworks.formtypeRocket = triangularRocket.getType();
                break;
            case "RectangularRocket":
                console.log("Viereck");
                let rectangularRocket = new Fireworks.Rectangular(_event, Fireworks.radiusOfRocket);
                Fireworks.crc2.fillStyle = Fireworks.colorOfRocket;
                rectangularRocket.draw();
                Fireworks.crc2.fill();
                Fireworks.symbols.push(rectangularRocket);
                Fireworks.formtypeRocket = rectangularRocket.getType();
                break;
            case "StarlikeRocket":
                console.log("Stern");
                let starRocket = new Fireworks.Star(_event, Fireworks.radiusOfRocket);
                Fireworks.crc2.fillStyle = Fireworks.colorOfRocket;
                starRocket.draw();
                Fireworks.crc2.fill();
                Fireworks.symbols.push(starRocket);
                Fireworks.formtypeRocket = starRocket.getType();
                break;
        }
        console.log("Raketenbasis");
        let circle = new Fireworks.Circle(_event, Fireworks.explosionOfRocket);
        circle.draw();
        Fireworks.symbols.push(circle);
        console.log("Explosionsradius gewählt");
        for (let i = 0; i < Fireworks.numberOfParticles; i++) {
            let particleForms = document.querySelector("select#formParticle");
            switch (particleForms.value) {
                case "CircularRocket":
                    let circleParticles = new Fireworks.Circle(_event, Fireworks.radiusOfParticle);
                    Fireworks.crc2.fillStyle = Fireworks.colorOfParticle;
                    circleParticles.draw();
                    Fireworks.crc2.fill();
                    Fireworks.symbols.push(circleParticles);
                    Fireworks.formtypeParticles = circleParticles.getType();
                    break;
                case "HeartLikeRocket":
                    console.log("Herz");
                    let heartParticles = new Fireworks.Heart(_event, Fireworks.radiusOfParticle);
                    Fireworks.crc2.fillStyle = Fireworks.colorOfParticle;
                    heartParticles.draw();
                    Fireworks.crc2.fill();
                    Fireworks.symbols.push(heartParticles);
                    Fireworks.formtypeParticles = heartParticles.getType();
                    break;
                case "TriangularRocket":
                    console.log("Dreieck");
                    let triangularParticles = new Fireworks.Triangular(_event, Fireworks.radiusOfParticle);
                    Fireworks.crc2.fillStyle = Fireworks.colorOfParticle;
                    triangularParticles.draw();
                    Fireworks.crc2.fill();
                    Fireworks.symbols.push(triangularParticles);
                    Fireworks.formtypeParticles = triangularParticles.getType();
                    break;
                case "RectangularRocket":
                    console.log("Viereck");
                    let rectangularParticles = new Fireworks.Rectangular(_event, Fireworks.radiusOfParticle);
                    Fireworks.crc2.fillStyle = Fireworks.colorOfParticle;
                    rectangularParticles.draw();
                    Fireworks.crc2.fill();
                    Fireworks.symbols.push(rectangularParticles);
                    Fireworks.formtypeParticles = rectangularParticles.getType();
                    break;
                case "StarlikeRocket":
                    console.log("Stern");
                    let starParticles = new Fireworks.Star(_event, Fireworks.radiusOfParticle);
                    Fireworks.crc2.fillStyle = Fireworks.colorOfParticle;
                    starParticles.draw();
                    Fireworks.crc2.fill();
                    Fireworks.symbols.push(starParticles);
                    Fireworks.formtypeParticles = starParticles.getType();
                    break;
            }
            console.log("Partikel");
        }
    }
    Fireworks.drawFormsRocket = drawFormsRocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Drawing.js.map