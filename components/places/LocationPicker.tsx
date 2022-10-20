import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

import { Colors } from '../../constants/colors';
import IconButton from '../ui/IconButton';
import verifyPermissions from '../../utils/verifyPermissions';
import { LocationType } from '../../common/types';
import Map from '../../screens/Map';

const LocationPicker: React.FC = () => {
    const [userLocation, setUserLocation] = useState<LocationType | null>(null);
    const navigation = useNavigation<any>();
    const [status, requestPermission] = Location.useForegroundPermissions();

    async function handleLocateUser() {
        const hasPermission = await verifyPermissions(
            status,
            requestPermission,
            Location.PermissionStatus
        );

        if (!hasPermission) return;

        const location = await Location.getCurrentPositionAsync();

        console.log(location);
        setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });
    }

    function handleSelectLocation(e: any) {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        setUserLocation({
            latitude,
            longitude
        });
    }

    function handleOpenMap() {
        navigation.navigate('ShowMap', {
            ...userLocation
        });
    }

    return (
        <View>
            <Map
                preview
                handleLocateMap={handleSelectLocation}
                userLocation={userLocation}
            />
            <View style={styles.buttonsContainer}>
                <IconButton
                    onPress={handleLocateUser}
                    name="location"
                    size={16}
                    color={Colors.primary100}
                >
                    Locate User
                </IconButton>
                <IconButton
                    onPress={handleOpenMap}
                    name="map"
                    size={16}
                    color={Colors.primary100}
                >
                    Pick on Map
                </IconButton>
            </View>
        </View>
    );
};

export default LocationPicker;

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
