"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Fireworks;
(function (Fireworks) {
    let canvasCollection;
    let databaseUrl = "mongodb+srv://Jacky:<password>@cluster0.pzi8m.mongodb.net/<dbname>?retryWrites=true&w=majority";
    // Port kreieren, wenn Port nicht zugeteilt wird, selber einen Wert nehmen
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        // Server kreieren
        let server = Http.createServer();
        console.log(server);
        console.log("Server startet on port:" + port);
        //Server soll auf port horchen
        server.listen(port);
        //Listener auf Server installieren
        server.addListener("request", handleRequest);
        // connectDatabase(databaseUrl);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        console.log("Database connection ", canvasCollection != undefined);
        canvasCollection = mongoClient.db("Feuerworks").collection("Rockets");
    }
    function handleRequest(_request, _response) {
        console.log("Server reagiert");
        //Festlegen, dass Typ von Antwort ein Text wird und Sicherheitsmechanismen ausschalten
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //wenn url da ist...
        if (_request.url) {
            //...dann url mit parse umwandeln, damit es lesbar wird
            let url = Url.parse(_request.url, true);
            console.log(url);
            //Schlüssel und ihre entsprechenden Werte über Array auf Website ausgeben lassen
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            //Assotiatives Array mithilfe von JSON in Zeichenketten umwandeln
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeRockets(url.query);
        }
        //Antwort beenden, damit sie verschickt wird
        _response.write("Das ist meine Antwort");
        _response.end();
    }
    function storeRockets(_rockets) {
        canvasCollection.insert(_rockets);
    }
})(Fireworks = exports.Fireworks || (exports.Fireworks = {}));
//# sourceMappingURL=Server.js.map