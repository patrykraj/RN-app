import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { GEO_API_KEY } from '@env';

import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import TitleInput from './TitleInput';
import PlaceModel from '../../models/place';
import { Colors } from '../../constants/colors';
import IconButton from '../ui/IconButton';
import { LocationContextType, PlaceFormType } from '../../common/types';
import { LocationContext } from '../../context';

const PlaceForm: React.FC<PlaceFormType> = ({ onSavePlace }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const { userLocation, imageUri, locationTitle } =
        useContext<LocationContextType>(LocationContext);

    function prepareSaveData() {
        if (!locationTitle || !imageUri || userLocation.initial)
            return Alert.alert('Invalid data');
        saveData();
    }

    async function saveData() {
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/reverse?lat=${userLocation.latitude}&lon=${userLocation.longitude}&limit=1&appid=${GEO_API_KEY}`
            );
            const data = await response.json();
            const savedNewLocation = new PlaceModel(
                locationTitle,
                imageUri,
                `${data[0].name}, ${data[0].country}`,
                {
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude
                }
            );
            onSavePlace(savedNewLocation);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TitleInput />
                <ImagePicker />
                <LocationPicker />
                <IconButton
                    name="add-circle-outline"
                    size={18}
                    color={Colors.accent500}
                    onPress={prepareSaveData}
                    disabled={loading}
                    submit
                >
                    Submit
                </IconButton>
            </View>
        </ScrollView>
    );
};

export default PlaceForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});
