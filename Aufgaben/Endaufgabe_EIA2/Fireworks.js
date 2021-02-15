"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "http://localhost:5001"; //url ist der Server
    async function handleLoad(_event) {
        console.log("Start");
        form = document.querySelector("form#userInputRocketOne");
        form.addEventListener("change", handleChange);
        let startAnimation = document.querySelector("button#startAnimation");
        startAnimation.addEventListener("click", startCanvas);
        // let userOutputRocketOne: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas#animation"); 
        // userOutputRocketOne.addEventListener("click", startCanvasRocketOne);    
        let saveRockets = document.querySelector("button#saveRockets");
        saveRockets.addEventListener("click", sendOrder);
    }
    async function sendOrder(_event) {
        console.log("Send order");
        let formData = new FormData(form); //Variable mit FormData erstellen
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData); //Man erstellt den query-string (Teil der URL) mit den Daten vom URLSearchParams und übergibt ihm die Daten aus dem Formular
        let response = await fetch(url + "?" + query.toString()); //man baut sich das URL mit fetch aus den Inhalt aus HTML und dem query-string, toString macht es Zeichenkette  //zu verschickende url miteinbauen und auf Variable beziehen
        let responseText = await response.text(); //Text der response
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
    function startCanvas(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
        let canvasAnimation = document.querySelector("canvas#animation");
        if (!canvasAnimation)
            return;
        Fireworks.crc2 = canvasAnimation.getContext("2d");
        Fireworks.drawBackground();
    }
    // function startCanvasRocketOne(_event: MouseEvent): void {
    //     let x: number = _event.offsetX;
    //     let y: number = _event.offsetY;
    //     let rocket: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
    //     rocket.style.left = x + "px";
    //     rocket.style.top = y + "px";
    // }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Fireworks.js.map