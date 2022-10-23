import { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MapEvent } from 'react-native-maps';

import { Colors } from '../constants/colors';
import { MapProps, LocationType } from '../common/types';
import { LocationContext } from '../context';

const Map: React.FC<MapProps> = ({ preview }) => {
    const { userLocation, setUserLocation } = useContext<{
        userLocation: LocationType;
        setUserLocation: React.Dispatch<React.SetStateAction<LocationType>>;
    }>(LocationContext);
    const [selectedView, setSelectedView] =
        useState<LocationType>(userLocation);

    useEffect(() => {
        if (userLocation) {
            setUserLocation(userLocation);
            setSelectedView(userLocation);
        }
    }, [userLocation]);

    function handleSelectLocation(e: MapEvent) {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        setUserLocation((prevState: LocationType) => ({
            ...prevState,
            latitude,
            longitude,
            ...(prevState.initial && { initial: false })
        }));
    }

    function handleSelectMapView(e: LocationType) {
        const { latitude, longitude, latitudeDelta, longitudeDelta } = e;

        setSelectedView({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        });
    }

    return (
        <View style={preview ? styles.mapPreview : styles.Map}>
            <MapView
                onPress={preview ? undefined : handleSelectLocation}
                onRegionChangeComplete={handleSelectMapView}
                style={styles.Map}
                region={{
                    latitude: selectedView.latitude,
                    longitude: selectedView.longitude,
                    latitudeDelta: selectedView.latitudeDelta,
                    longitudeDelta: selectedView.longitudeDelta
                }}
            >
                {!userLocation.initial && (
                    <Marker
                        coordinate={{
                            latitude: userLocation.latitude,
                            longitude: userLocation.longitude
                        }}
                    />
                )}
            </MapView>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    },
    Map: {
        width: '100%',
        height: '100%'
    }
});
