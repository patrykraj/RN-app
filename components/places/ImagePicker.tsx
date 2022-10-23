import { useState } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import {
    launchCameraAsync,
    useCameraPermissions,
    PermissionStatus
} from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

import IconButton from '../ui/IconButton';
import { Colors } from '../../constants/colors';
import verifyPermissions from '../../utils/verifyPermissions';

const ImagePicker: React.FC = () => {
    const [cameraPermissionsInformation, requestPermission] =
        useCameraPermissions();
    const [imageSource, setImageSource] = useState<string | null>(null);

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions(
            cameraPermissionsInformation,
            requestPermission,
            PermissionStatus
        );

        if (!hasPermission) {
            return;
        }

        try {
            const image = await launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.6
            });

            const { uri } = image as ImageInfo;
            setImageSource(uri);
        } catch (error) {
            Alert.alert('Camera permission disabled');
        }
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
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
