import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import PlaceList from '../components/places/PlaceList';
import { useLocationContext } from '../context';
import { fetchPlaces } from '../utils/database';

function AllPlaces() {
    const { savedLocations, setSavedLocations } = useLocationContext();

    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadPlaces() {
            const places = await fetchPlaces();
            setSavedLocations(places);
        }

        if (isFocused) {
            loadPlaces();
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <PlaceList places={savedLocations} />
        </View>
    );
}

export default AllPlaces;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
