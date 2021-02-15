"use strict";
var Fireworks;
(function (Fireworks) {
    Fireworks.positionRocket = [];
    Fireworks.symbols = [];
    Fireworks.user = getUserName();
    Fireworks.url = "https://FireworksJacqueline.herokuapp.com/";
    Fireworks.canvasWidth = 1000;
    Fireworks.canvasHeight = 400;
    window.addEventListener("load", handleLoadThree);
    function handleLoadThree() {
        let colorRocket = document.querySelector("select#colorRocket");
        colorRocket.addEventListener("change", Fireworks.changeColorRocket);
        let formOfRocket = document.querySelector("select#formRocket");
        formOfRocket.addEventListener("change", Fireworks.changeFormRocket);
        let radiusRocket = document.querySelector("input#sizeRocket");
        radiusRocket.addEventListener("input", Fireworks.changeSizeRocket);
        let explosionRocket = document.querySelector("input#explosionRadiusRocket");
        explosionRocket.addEventListener("input", Fireworks.changeExplosionRocket);
        let colorOfParticle = document.querySelector("select#colorParticle");
        colorOfParticle.addEventListener("change", Fireworks.changeColorParticle);
        let formOfParticle = document.querySelector("select#formParticle");
        formOfParticle.addEventListener("change", Fireworks.changeFormParticle);
        let radiusParticle = document.querySelector("input#sizeParticle");
        radiusParticle.addEventListener("input", Fireworks.changeSizeParticle);
        let numberParticles = document.querySelector("input#numberParticle");
        numberParticles.addEventListener("input", Fireworks.changeNumberParticle);
        let lifeParticle = document.querySelector("input#lifetimeParticle");
        lifeParticle.addEventListener("input", Fireworks.changeLifeParticle);
        // let saveRocketsbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveRockets");
        // saveRocketsbutton.addEventListener("click", savePicture);
        username();
    }
    function getUserName() {
        // tslint:disable-next-line: typedef
        let user = prompt("Please enter your username:", "Username");
        if (user == null) {
            return "";
        }
        else {
            return user;
        }
    }
    Fireworks.getUserName = getUserName;
    function username() {
        if (Fireworks.user == "") {
            Fireworks.user = "User";
            console.log("Feuerwerk " + Fireworks.user);
            console.log("Willkommen " + Fireworks.user);
        }
        else {
            console.log("Feuerwerk " + Fireworks.user);
            console.log("Willkommen " + Fireworks.user);
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = Fireworks.crc2.createLinearGradient(0, 0, 0, Fireworks.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 0%, 0%)");
        gradient.addColorStop(0.5, "HSL(216, 100%, 20%)");
        gradient.addColorStop(1, "HSL(216, 100%, 50%)");
        Fireworks.crc2.fillStyle = gradient;
        Fireworks.crc2.fillRect(0, 0, Fireworks.crc2.canvas.width, Fireworks.crc2.canvas.height);
    }
    Fireworks.drawBackground = drawBackground;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Canvas.js.map