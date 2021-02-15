import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Fireworks {
    interface Rockets {
        [type: string]: string | string[];
    }
    
    let canvasCollection: Mongo.Collection;
    let databaseUrl: string = "mongodb+srv://Jacky:<password>@cluster0.pzi8m.mongodb.net/<dbname>?retryWrites=true&w=majority";

    // Port kreieren, wenn Port nicht zugeteilt wird, selber einen Wert nehmen
    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
         port = 5001;

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        // Server kreieren
        let server: Http.Server = Http.createServer();
        console.log(server);
    
        console.log("Server startet on port:" + port);

        //Server soll auf port horchen
        server.listen(port);
        //Listener auf Server installieren
        server.addListener("request", handleRequest);
        // connectDatabase(databaseUrl);
}

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient (_url, options);
        await mongoClient.connect();
        console.log("Database connection ", canvasCollection != undefined);
        canvasCollection = mongoClient.db("Feuerworks").collection("Rockets");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Server reagiert");

        //Festlegen, dass Typ von Antwort ein Text wird und Sicherheitsmechanismen ausschalten
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        //wenn url da ist...
        if (_request.url) {
            //...dann url mit parse umwandeln, damit es lesbar wird
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url);
        //Schlüssel und ihre entsprechenden Werte über Array auf Website ausgeben lassen
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            //Assotiatives Array mithilfe von JSON in Zeichenketten umwandeln
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeRockets(url.query);
        }
        //Antwort beenden, damit sie verschickt wird
        _response.write("Das ist meine Antwort");
        _response.end();
    }

    function storeRockets(_rockets: Rockets): void {
        canvasCollection.insert(_rockets);
    }
}
