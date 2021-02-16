namespace Fireworks {

    export interface RocketProperties {
    colorOfRocket: string;
    formTypeRocket: string;
    radiusOfRocket: number;
    explosionOfRocket: number;
    colorOfParticle: string;
    formTypeParticle: string;
    radiusOfParticle: number;
    numberOfParticles: number;
    lifeOfParticle: number;
    }

    // export function saveRockets(_event: MouseEvent): void {
    //     let confirmation: boolean = confirm("Willst du die Raketen wirklich speichern?");
    //     if (confirmation == true) {
    //         formatRocket(user);
    //     } else {
    //         alert("Deine Raketen wurden nicht gespeichert");
    //     }
    // }

    // export function formatRocket(_user: string): void {
    // let rocketInformation: RocketProperties[] = [];
    // for (let entry of symbols) {
    //     let rocketDatas: RocketProperties = {
    //     "colorOfRocket": entry.getType(),
    //     "formTypeRocket": entry.getType(),
    //     "radiusOfRocket": entry.radiusOfRocket,
    //     "explosionOfRocket": entry.explosionOfRocket,
    //     "colorOfParticle": entry.getType(),
    //     "formTypeParticle": entry.getType(),
    //     "radiusOfParticle": Math.floor(entry.velocity.x),
    //     "numberOfParticles": Math.floor(entry.velocity.y),
    //     "lifeOfParticle": entry.size
    //     };
    //     rocketInformation.push(rocketDatas);
    // }
    // sendPicture(rocketInformation, _user);
    // console.log(pictureinformation);
}
// }