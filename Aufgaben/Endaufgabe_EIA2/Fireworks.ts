namespace Fireworks {

    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let url: string = "http://localhost:5001";      //url ist der Server

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");

        form = <HTMLFormElement>document.querySelector("form#userInputRocketOne");
        form.addEventListener("change", handleChange); 
        let startAnimation: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startAnimation");
        startAnimation.addEventListener("click", startCanvas);
        // let userOutputRocketOne: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas#animation"); 
        // userOutputRocketOne.addEventListener("click", startCanvasRocketOne);    
        let saveRockets: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveRockets");
        saveRockets.addEventListener("click", sendOrder);
    }

    async function sendOrder(_event: MouseEvent): Promise<void> {               //eine asynchrone Funktion gibt nicht einen beliebigen Typ zurück, sondern ein Promise
        console.log("Send order");
        let formData: FormData = new FormData(form);                            //Variable mit FormData erstellen
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);        //Man erstellt den query-string (Teil der URL) mit den Daten vom URLSearchParams und übergibt ihm die Daten aus dem Formular
        let response: Response = await fetch(url + "?" + query.toString());                                      //man baut sich das URL mit fetch aus den Inhalt aus HTML und dem query-string, toString macht es Zeichenkette  //zu verschickende url miteinbauen und auf Variable beziehen
        let responseText: string = await response.text();                       //Text der response
        alert("Das sind deine Raketen: " + responseText + "<br/>" + "Deine Raketen sind abgespeichert");
    }

    function handleChange(_event: Event): void {
        // console.log(_event);
        let formData: FormData = new FormData(document.forms[0]); 
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

    function startCanvas(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);

        let canvasAnimation: HTMLCanvasElement | null = document.querySelector("canvas#animation");
        if (!canvasAnimation)                                                              
            return;
        crc2 = <CanvasRenderingContext2D>canvasAnimation.getContext("2d");

        drawBackground();
    }

    // function startCanvasRocketOne(_event: MouseEvent): void {
    //     let x: number = _event.offsetX;
    //     let y: number = _event.offsetY;

    //     let rocket: HTMLCanvasElement = <HTMLCanvasElement>document.createElement("canvas");
    //     rocket.style.left = x + "px";
    //     rocket.style.top = y + "px";
    // }
}