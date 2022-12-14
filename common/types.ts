import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import * as Camera from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface PlaceItemProps {
    place: IPlace;
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
    location: Partial<LocationType>;
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
    disabled?: boolean;
    submit?: boolean;
}

export type PermissionInformationType =
    | Location.LocationPermissionResponse
    | Camera.PermissionResponse
    | null;

export type RequestPermissionType =
    | (() => Promise<Camera.PermissionResponse>)
    | (() => Promise<Location.LocationPermissionResponse>);

export type PermissionStatusType =
    | typeof Camera.PermissionStatus
    | typeof Location.PermissionStatus;

export interface PlaceDetailsRouteProps {
    route?: {
        params: {
            id: string;
        };
    };
}

export type HomeStackNavigatorParamList = {
    Home: undefined;
    AddPlace: undefined;
    Map: LocationType;
    PlaceDetails?: {
        id: string;
    };
};

export type HomeScreenNavigationProp =
    NativeStackNavigationProp<HomeStackNavigatorParamList>;

export type NavigationTypes = {
    goBack: () => void;
    setOptions: (arg: {}) => void;
};

export interface MapProps {
    preview?: boolean;
    navigation?: NavigationTypes;
}

export type LocationContextType = {
    userLocation: LocationType;
    locationTitle: string;
    imageUri: string;
    savedLocations: IPlace[];
    setUserLocation: React.Dispatch<React.SetStateAction<LocationType>>;
    setLocationTitle: React.Dispatch<React.SetStateAction<string>>;
    setImageUri: React.Dispatch<React.SetStateAction<string>>;
    setSavedLocations: React.Dispatch<React.SetStateAction<IPlace[]>>;
};

export type PlaceFormType = {
    onSavePlace: (arg: IPlace) => void;
};
