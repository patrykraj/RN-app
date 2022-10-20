import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { initialRegion } from '../constants';
import { Colors } from '../constants/colors';

const Map: React.FC<any> = ({
    handleLocateMap,
    userLocation,
    preview,
    route
}) => {
    return (
        <View style={preview ? styles.mapPreview : styles.Map}>
            <MapView
                onPress={handleLocateMap}
                style={styles.Map}
                initialRegion={initialRegion}
                region={{
                    latitude:
                        route?.params?.latitude ||
                        userLocation?.latitude ||
                        initialRegion.latitude,
                    longitude:
                        route?.params?.longitude ||
                        userLocation?.longitude ||
                        initialRegion.longitude,
                    latitudeDelta: 0.0432,
                    longitudeDelta: 0.0231
                }}
            >
                <Marker
                    coordinate={{
                        latitude:
                            route?.params?.latitude ||
                            userLocation?.latitude ||
                            initialRegion.latitude,
                        longitude:
                            route?.params?.longitude ||
                            userLocation?.longitude ||
                            initialRegion.longitude
                    }}
                />
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
