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
    function changeFormRocket() {
        canvasRendering();
        let formRocket = document.querySelector("select#formRocket");
        Fireworks.crc2.strokeStyle = formRocket.value;
        Fireworks.formOfRocket = formRocket.value;
        return Fireworks.formOfRocket;
    }
    Fireworks.changeFormRocket = changeFormRocket;
    function changeSizeRocket() {
        // canvasRendering();
        let sizeRocket = document.querySelector("input#sizeRocket");
        let amount = parseFloat(sizeRocket.value);
        Fireworks.radiusRocket = amount;
    }
    Fireworks.changeSizeRocket = changeSizeRocket;
    function changeExplosionRocket() {
        // canvasRendering();
        let explosionRadiusRocket = document.querySelector("input#explosionRadiusRocket");
        let amount = parseFloat(explosionRadiusRocket.value);
        Fireworks.explosionRocket = amount;
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
    function changeFormParticle() {
        let formParticle = document.querySelector("select#formParticle");
        Fireworks.crc2.strokeStyle = formParticle.value;
        Fireworks.formOfParticle = formParticle.value;
        return Fireworks.formOfParticle;
    }
    Fireworks.changeFormParticle = changeFormParticle;
    function changeSizeParticle() {
        // canvasRendering();
        let sizeParticle = document.querySelector("input#sizeParticle");
        let amount = parseFloat(sizeParticle.value);
        Fireworks.radiusRocket = amount;
    }
    Fireworks.changeSizeParticle = changeSizeParticle;
    function changeNumberParticle() {
        // canvasRendering();
        let numberParticle = document.querySelector("input#numberParticle");
        let amount = parseFloat(numberParticle.value);
        Fireworks.numberParticles = amount;
    }
    Fireworks.changeNumberParticle = changeNumberParticle;
    function changeLifeParticle() {
        // canvasRendering();
        let lifetimeParticle = document.querySelector("input#lifetimeParticle");
        let amount = parseFloat(lifetimeParticle.value);
        Fireworks.lifeParticle = amount;
    }
    Fireworks.changeLifeParticle = changeLifeParticle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Anpassung.js.map