import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PlaceItem from './PlaceItem';
import { PlaceListProps } from '../../common/types';

const PlaceList: React.FC<PlaceListProps> = ({ places }) => {
    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>
                    No places added yet - start adding some!
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                columnWrapperStyle={styles.columnWrapperStyle}
                data={places}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PlaceItem place={item} />}
            />
        </View>
    );
};

export default PlaceList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 16
    },
    columnWrapperStyle: {
        justifyContent: 'space-between',
        marginBottom: 15
    }
});
