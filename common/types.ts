import Ionicons from '@expo/vector-icons/Ionicons';

export interface PlaceItemProps {
    place: object;
    onSelect?: () => void;
}

export interface PlaceListProps {
    places: IPlace[];
}

export type LocationType = {
    lat: number;
    lng: number;
};

export interface IPlace {
    title: string;
    imageUri: string;
    address: string;
    location: LocationType;
    id: string;
}

export interface InlineButtonProps {
    name: React.ComponentProps<typeof Ionicons>['name'];
    size: number;
    color: string | undefined;
    onPress: () => void;
}

export interface IconButtonProps extends InlineButtonProps {
    children: string;
}
