import React, { createContext, useState } from 'react';
import { initialRegion } from '../constants';
import { LocationType, LocationContextType } from '../common/types';

export const initialState = {
    userLocation: initialRegion,
    locationTitle: '',
    imageUri: '',
    setUserLocation: () => {},
    setLocationTitle: () => {},
    setImageUri: () => {}
};

export const LocationContext = createContext<LocationContextType>(initialState);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
    const [userLocation, setUserLocation] = useState<LocationType>(
        initialState.userLocation
    );
    const [locationTitle, setLocationTitle] = useState<string>('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    return (
        <LocationContext.Provider
            value={{
                userLocation,
                locationTitle,
                imageUri,
                setUserLocation,
                setLocationTitle,
                setImageUri
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;
