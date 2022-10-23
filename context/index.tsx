import React, { createContext, useState } from 'react';
import { initialRegion } from '../constants';
import { LocationType } from '../common/types';

export const initialState = {
    userLocation: initialRegion,
    setUserLocation: () => {}
};

export const LocationContext = createContext<{
    userLocation: LocationType;
    setUserLocation: React.Dispatch<React.SetStateAction<LocationType>>;
}>(initialState);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
    const [userLocation, setUserLocation] = useState<LocationType>(
        initialState.userLocation
    );

    return (
        <LocationContext.Provider value={{ userLocation, setUserLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;
