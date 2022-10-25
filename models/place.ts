import { LocationType, IPlace } from '../common/types';

export default class Place implements IPlace {
    readonly title: string;
    readonly imageUri: string | null;
    readonly address: string;
    readonly location: Partial<LocationType>;
    readonly id: string;

    constructor(
        title: string,
        imageUri: string | null,
        address: string,
        location: Partial<LocationType>
    ) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location; // { latitude: 0.141241, longitude: 127.121 }
        this.id = new Date().toString() + Math.random().toString();
    }
}
