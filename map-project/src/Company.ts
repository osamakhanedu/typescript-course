import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';


export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number;
    }

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent() {
        return `Hi There, Welcome to ${this.name}`;
    }
}


