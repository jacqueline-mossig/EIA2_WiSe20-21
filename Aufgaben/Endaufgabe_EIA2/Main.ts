namespace Fireworks {

    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let url: string = "http://localhost:5001";      //url ist der Server

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");

        // startCanvasRocketOne();
        // startCanvasFireworks(); 
        form = <HTMLFormElement>document.querySelector("form#userInputRocketOne");
        form.addEventListener("change", handleChange);
        let saveRockets: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveRockets");
        saveRockets.addEventListener("click", saveRockets);
    }

    async function saveRockets(_event: MouseEvent): Promise<void> {               
        console.log("Send order");
        let formData: FormData = new FormData(form);                            
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);        
        let response: Response = await fetch(url + "?" + query.toString());             
        let responseText: string = await response.text();
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

    // function startCanvasFireworks(): void {
    //     let canvasAnimation: HTMLCanvasElement | null = document.querySelector("canvas#animation");
    //     if (!canvasAnimation)                                                              
    //         return;
    //     crc2 = <CanvasRenderingContext2D>canvasAnimation.getContext("2d");

    //     drawBackground();
    // }

    // function startCanvasRocketOne(): void {
    //     let canvasAnimation: HTMLCanvasElement | null = document.querySelector("canvas#showRocket");
    //     if (!canvasAnimation)                                                              
    //         return;
    //     crc2 = <CanvasRenderingContext2D>canvasAnimation.getContext("2d");

    //     drawBackground();
    // }

    export function startAnimation(): void {
        if (counter == 0) {
            counter++;
            animation = true;
            update();
        } else {
            return;
        }
    }

    export function stopAnimation(): void {
        if (counter == 1) {
            counter--;
            animation = false;
        } else {
            return;
        }
    }

    export function update(): void {
        let request: number = requestAnimationFrame(update);
        if (animation == true) {
            crc2.clearRect(0, 0, canvasWidth, canvasHeight);
            for (let i: number = 0; i < symbols.length; i++) {
                symbols[i].move(1 / 5);
                symbols[i].draw();
            }
        } else {
            cancelAnimationFrame(request);
        }
    }
}