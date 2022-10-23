import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import * as Camera from 'expo-image-picker';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type PlaceType = {
    title: string;
    imageUri: string;
    address: string;
};

export interface PlaceItemProps {
    place: PlaceType;
    onSelect?: () => void;
}

export interface PlaceListProps {
    places: IPlace[];
}

export type LocationType = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
    initial?: boolean;
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

export type HomeStackNavigatorParamList = {
    Home: undefined;
    AddPlace: undefined;
    Map: LocationType;
};

export type HomeScreenNavigationProp =
    NativeStackNavigationProp<HomeStackNavigatorParamList>;

export interface MapProps {
    preview: boolean;
}
