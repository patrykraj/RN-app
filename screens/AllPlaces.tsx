import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceList from '../components/places/PlaceList';
import { LocationContextType } from '../common/types';
import { LocationContext } from '../context';

function AllPlaces() {
    const { savedLocations } =
        useContext<LocationContextType>(LocationContext);

    return <View style={styles.container}><PlaceList places={savedLocations} /></View>;
}

export default AllPlaces;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
