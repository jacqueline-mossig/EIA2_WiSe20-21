"use strict";
var Fireworks;
(function (Fireworks) {
    function canvasRendering() {
        let canvasRocketOne = document.querySelector("canvas#rocketOne");
        if (!canvasRocketOne)
            return;
        Fireworks.crc2 = canvasRocketOne.getContext("2d");
    }
    Fireworks.canvasRendering = canvasRendering;
    function changeColorRocket() {
        canvasRendering();
        let colorRocket = document.querySelector("select#colorRocket");
        Fireworks.crc2.fillStyle = colorRocket.value;
        Fireworks.colorOfRocket = colorRocket.value;
        return Fireworks.colorOfRocket;
    }
    Fireworks.changeColorRocket = changeColorRocket;
    function changeSizeRocket() {
        let sizeRocket = document.querySelector("input#sizeRocket");
        let amountSizeRocket = parseFloat(sizeRocket.value);
        Fireworks.radiusOfRocket = amountSizeRocket;
    }
    Fireworks.changeSizeRocket = changeSizeRocket;
    function changeExplosionRocket() {
        let explosionRadiusRocket = document.querySelector("input#explosionRadiusRocket");
        let amountExplosionRadiusRocket = parseFloat(explosionRadiusRocket.value);
        Fireworks.explosionOfRocket = amountExplosionRadiusRocket;
    }
    Fireworks.changeExplosionRocket = changeExplosionRocket;
    function changeColorParticle() {
        canvasRendering();
        let colorParticle = document.querySelector("select#colorParticle");
        Fireworks.crc2.fillStyle = colorParticle.value;
        Fireworks.colorOfParticle = colorParticle.value;
        return Fireworks.colorOfParticle;
    }
    Fireworks.changeColorParticle = changeColorParticle;
    function changeSizeParticle() {
        let sizeParticle = document.querySelector("input#sizeParticle");
        let amountSizeParticle = parseFloat(sizeParticle.value);
        Fireworks.radiusOfParticle = amountSizeParticle;
    }
    Fireworks.changeSizeParticle = changeSizeParticle;
    function changeNumberParticle() {
        let numberOfParticle = document.querySelector("input#numberParticle");
        let amountNumberParticle = parseFloat(numberOfParticle.value);
        Fireworks.numberOfParticles = amountNumberParticle;
    }
    Fireworks.changeNumberParticle = changeNumberParticle;
    function changeLifetimeParticle() {
        let lifetimeParticle = document.querySelector("input#lifetimeParticle");
        let amountLifetimeParticle = parseFloat(lifetimeParticle.value);
        Fireworks.lifeOfParticle = amountLifetimeParticle;
    }
    Fireworks.changeLifetimeParticle = changeLifetimeParticle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=FitInput.js.map