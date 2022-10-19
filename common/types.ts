import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import * as Camera from 'expo-image-picker';

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

export type permissionInformationType =
    | Location.LocationPermissionResponse
    | Camera.PermissionResponse
    | null;

export type requestPermissionType =
    | (() => Promise<Camera.PermissionResponse>)
    | (() => Promise<Location.LocationPermissionResponse>);

export type PermissionStatusType =
    | typeof Camera.PermissionStatus
    | typeof Location.PermissionStatus;
