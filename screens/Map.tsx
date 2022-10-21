import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MapEvent } from 'react-native-maps';

import { initialRegion } from '../constants';
import { Colors } from '../constants/colors';
import { MapProps, LocationType } from '../common/types';

const Map: React.FC<MapProps> = ({ userLocation, preview, route }) => {
    const [selectedLocation, setSelectedLocation] =
        useState<LocationType | null>(
            route ? { ...route.params } : userLocation
        );

    useEffect(() => {
        if (userLocation) setSelectedLocation(userLocation);
    }, [userLocation]);

    function handleSelectLocation(e: MapEvent) {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        setSelectedLocation({
            latitude,
            longitude,
            latitudeDelta: 0.0432,
            longitudeDelta: 0.0231
        });
    }

    let previewProps = {};
    if (preview)
        previewProps = {
            pitchEnabled: false,
            rotateEnabled: false,
            zoomEnabled: false,
            scrollEnabled: false
        };

    return (
        <View style={preview ? styles.mapPreview : styles.Map}>
            <MapView
                onPress={preview ? () => {} : handleSelectLocation}
                style={styles.Map}
                initialRegion={selectedLocation || initialRegion}
                region={{
                    latitude: selectedLocation?.latitude || 0,
                    longitude: selectedLocation?.longitude || 0,
                    latitudeDelta: 0.0432,
                    longitudeDelta: 0.0231
                }}
                {...previewProps}
            >
                {selectedLocation && (
                    <Marker
                        coordinate={{
                            latitude: selectedLocation.latitude,
                            longitude: selectedLocation.longitude
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
