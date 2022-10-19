import { LocationType, IPlace } from '../common/types';

export default class Place implements IPlace {
    readonly title: string;
    readonly imageUri: string;
    readonly address: string;
    readonly location: LocationType;
    readonly id: string;

    constructor(
        title: string,
        imageUri: string,
        address: string,
        location: LocationType
    ) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location; // { lat: 0.141241, lng: 127.121 }
        this.id = new Date().toString() + Math.random().toString();
    }
}
