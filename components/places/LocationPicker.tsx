import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

import { initialRegion } from '../../constants';
import { Colors } from '../../constants/colors';
import IconButton from '../ui/IconButton';
import verifyPermissions from '../../utils/verifyPermissions';
import { HomeScreenNavigationProp, LocationType } from '../../common/types';
import Map from '../../screens/Map';

const LocationPicker: React.FC = () => {
    const [userLocation, setUserLocation] =
        useState<LocationType>(initialRegion);
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [status, requestPermission] = Location.useForegroundPermissions();

    async function handleLocateUser() {
        const hasPermission = await verifyPermissions(
            status,
            requestPermission,
            Location.PermissionStatus
        );

        if (!hasPermission) return;

        const location = await Location.getCurrentPositionAsync();

        setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0432,
            longitudeDelta: 0.0231
        });
    }

    function handleOpenMap() {
        navigation.navigate('Map', {
            ...userLocation,
            latitudeDelta: 0.0432,
            longitudeDelta: 0.0231
        });
    }

    useEffect(() => {
        handleLocateUser();
    }, []);

    let content = userLocation ? (
        <Map userLocation={userLocation} preview />
    ) : (
        <View style={styles.mapFallback}>
            <Text>Map preview not available.</Text>
        </View>
    );

    return (
        <View>
            {content}
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
    },
    mapFallback: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    }
});
