namespace Fireworks {

    export interface AnimationProperties {
        type: string;
        positionX: number;
        positionY: number;
        velocityX: number;
        velocityY: number;
        size: number;
    }

    export function savePicture(): void {
        let confirmation: boolean = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            formatPicture(user);
        } else {
            alert("Your picture hasn't been saved");
        }
    }

    function formatPicture(_user: string): void {
        let pictureinformation: AnimationProperties[] = [];
        for (let entry of symbols) {
            let format: AnimationProperties = {
            "type": entry.getType(),
            "positionX": Math.floor(entry.position.x),
            "positionY": Math.floor(entry.position.y),
            "velocityX": Math.floor(entry.velocity.x),
            "velocityY": Math.floor(entry.velocity.y),
            "size": entry.size
            };
            pictureinformation.push(format);
        }
        sendPicture(pictureinformation, _user);
        console.log(pictureinformation);
    }

    async function sendPicture(_properties: AnimationProperties[], _user: string): Promise<void> {
        let name: string = _user;
        let canvasInfo: string[] = [];
        let width: string = Math.floor(canvasWidth).toString();
        let height: string = Math.floor(canvasHeight).toString();
        let pensil: string = Math.floor(pensilThickness).toString();
        let pensilcolor: string = colorofpensil;
        canvasInfo.push(width, height, pensil, canvasbackground, pensilcolor);

        let canvasLook: string = JSON.stringify(canvasInfo);
        let canvasQuery: URLSearchParams = new URLSearchParams(canvasLook);

        let objectProperties: string = JSON.stringify(_properties);
        let objectQuery: URLSearchParams = new URLSearchParams(objectProperties);
        
        let response: Response = await fetch (url + "?savePicture&" + name + canvasQuery.toString() + "&" + objectQuery.toString());

        let responseText: string = await response.text();
        if (responseText != "") {
            alert("Your picture " + name + " has been saved!")
        } else {
            alert("Error occured");
        }
    }
}