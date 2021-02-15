"use strict";
var Fireworks;
(function (Fireworks) {
    function savePicture() {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            formatPicture(Fireworks.user);
        }
        else {
            alert("Your picture hasn't been saved");
        }
    }
    Fireworks.savePicture = savePicture;
    function formatPicture(_user) {
        let pictureinformation = [];
        for (let entry of Fireworks.symbols) {
            let format = {
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
    async function sendPicture(_properties, _user) {
        let name = _user;
        let canvasInfo = [];
        let width = Math.floor(Fireworks.canvasWidth).toString();
        let height = Math.floor(Fireworks.canvasHeight).toString();
        let pensil = Math.floor(pensilThickness).toString();
        let pensilcolor = colorofpensil;
        canvasInfo.push(width, height, pensil, canvasbackground, pensilcolor);
        let canvasLook = JSON.stringify(canvasInfo);
        let canvasQuery = new URLSearchParams(canvasLook);
        let objectProperties = JSON.stringify(_properties);
        let objectQuery = new URLSearchParams(objectProperties);
        let response = await fetch(Fireworks.url + "?savePicture&" + name + canvasQuery.toString() + "&" + objectQuery.toString());
        let responseText = await response.text();
        if (responseText != "") {
            alert("Your picture " + name + " has been saved!");
        }
        else {
            alert("Error occured");
        }
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Save.js.map