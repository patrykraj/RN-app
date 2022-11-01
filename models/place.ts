import { LocationType, IPlace } from '../common/types';

export default class Place implements IPlace {
    readonly title: string;

    readonly imageUri: string;

    readonly address: string;

    readonly location: Partial<LocationType>;

    readonly id: string;

    constructor(
        title: string,
        imageUri: string,
        address: string,
        location: Partial<LocationType>,
        id: string
    ) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location; // { latitude: 0.141241, longitude: 127.121 }
        this.id = id;
    }
}
