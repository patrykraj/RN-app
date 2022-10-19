import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

import { Colors } from '../../constants/colors';
import IconButton from '../ui/IconButton';
import verifyPermissions from '../../utils/verifyPermissions';

const LocationPicker: React.FC = () => {
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
    }

    function handleLocateMap() {}

    return (
        <View>
            <View style={styles.mapPreview}></View>
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
                    onPress={handleLocateMap}
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
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
