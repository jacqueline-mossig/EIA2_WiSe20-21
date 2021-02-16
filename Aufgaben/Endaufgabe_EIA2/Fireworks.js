"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "http://localhost:5001"; //url ist der Server
    async function handleLoad(_event) {
        console.log("Start");
        startCanvasRocketOne();
        startCanvasFireworks();
        form = document.querySelector("form#userInputRocketOne");
        form.addEventListener("change", handleChange);
        let saveRockets = document.querySelector("button#saveRockets");
        saveRockets.addEventListener("click", saveRockets);
        username();
    }
    async function saveRockets(_event) {
        console.log("Send order");
        let formData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert("Das sind deine Raketen: " + responseText + "<br/>" + "Deine Raketen sind abgespeichert");
    }
    function handleChange(_event) {
        // console.log(_event);
        let formData = new FormData(document.forms[0]);
        // console.log(formData); 
        for (let entry of formData) {
            // console.log(entry);
            switch (entry[0]) {
                case "ColorParticle":
                    console.log(entry[1]);
                    break;
                case "NumberParticle":
                    console.log(entry[1]);
                    break;
                case "FormParticle":
                    console.log(entry[1]);
                    break;
                case "LifetimeParticle":
                    console.log(entry[1]);
                    break;
                case "FormRocket":
                    console.log(entry[1]);
                    break;
                case "ExplosionRadiusRocket":
                    console.log(entry[1]);
                    break;
            }
        }
        console.groupEnd();
    }
    function startCanvasFireworks() {
        let canvasAnimation = document.querySelector("canvas#animation");
        if (!canvasAnimation)
            return;
        Fireworks.crc2 = canvasAnimation.getContext("2d");
        Fireworks.drawBackground();
    }
    function startCanvasRocketOne() {
        let canvasAnimation = document.querySelector("canvas#showRocket");
        if (!canvasAnimation)
            return;
        Fireworks.crc2 = canvasAnimation.getContext("2d");
        Fireworks.drawBackground();
    }
    function getUserName() {
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
            console.log("Rockets " + Fireworks.user);
            console.log("Welcome " + Fireworks.user);
        }
        else {
            console.log("Rockets " + Fireworks.user);
            console.log("Welcome " + Fireworks.user);
        }
    }
    function startAnimation() {
        if (Fireworks.counter == 0) {
            Fireworks.counter++;
            Fireworks.animation = true;
            update();
        }
        else {
            return;
        }
    }
    Fireworks.startAnimation = startAnimation;
    function stopAnimation() {
        if (Fireworks.counter == 1) {
            Fireworks.counter--;
            Fireworks.animation = false;
        }
        else {
            return;
        }
    }
    Fireworks.stopAnimation = stopAnimation;
    function update() {
        let request = requestAnimationFrame(update);
        if (Fireworks.animation == true) {
            Fireworks.crc2.clearRect(0, 0, Fireworks.canvasWidth, Fireworks.canvasHeight);
            for (let i = 0; i < Fireworks.symbols.length; i++) {
                Fireworks.symbols[i].move(1 / 5);
                Fireworks.symbols[i].draw();
            }
        }
        else {
            cancelAnimationFrame(request);
        }
    }
    Fireworks.update = update;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Fireworks.js.map