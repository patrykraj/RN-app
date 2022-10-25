import React, { createContext, useState, useContext } from 'react';
import { initialRegion } from '../constants';
import { LocationType, LocationContextType, IPlace } from '../common/types';

export const initialState = {
    userLocation: initialRegion,
    locationTitle: '',
    imageUri: '',
    savedLocations: [],
    setUserLocation: () => {},
    setLocationTitle: () => {},
    setImageUri: () => {},
    setSavedLocations: () => {}
};

export const LocationContext = createContext<LocationContextType>(initialState);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
    const [userLocation, setUserLocation] = useState<LocationType>(
        initialState.userLocation
    );
    const [locationTitle, setLocationTitle] = useState<string>('');
    const [imageUri, setImageUri] = useState<string>('');
    const [savedLocations, setSavedLocations] = useState<IPlace[]>([]);

    return (
        <LocationContext.Provider
            value={{
                userLocation,
                locationTitle,
                imageUri,
                savedLocations,
                setUserLocation,
                setLocationTitle,
                setImageUri,
                setSavedLocations
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export const useLocationContext = () =>
    useContext<LocationContextType>(LocationContext);

export default LocationProvider;
