import { useState } from 'react';
import { View, StyleSheet, Button, Alert, Image, Text } from 'react-native';
import {
    launchCameraAsync,
    useCameraPermissions,
    PermissionStatus
} from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

import IconButton from '../ui/IconButton';

import { Colors } from '../../constants/colors';

const ImagePicker: React.FC = () => {
    const [cameraPermissionsInformation, requestPermission] =
        useCameraPermissions();
    const [imageSource, setImageSource] = useState<string | null>(null);

    async function verifyPermissions() {
        if (
            cameraPermissionsInformation?.status ===
            PermissionStatus.UNDETERMINED
        ) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionsInformation?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant access to camera'
            );
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.6
        });

        const { uri } = image as ImageInfo;
        setImageSource(uri);
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (imageSource)
        imagePreview = (
            <Image style={styles.image} source={{ uri: imageSource }} />
        );

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <IconButton
                onPress={takeImageHandler}
                name="camera"
                size={18}
                color={Colors.primary50}
            >
                Take Image
            </IconButton>
        </View>
    );
};

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
