import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';

import { PlaceItemProps } from '../../common/types';
import { Colors } from '../../constants/colors';

const PlaceItem: React.FC<PlaceItemProps> = ({
    place,
    onSelect
}): JSX.Element => {
    return (
        <Pressable style={styles.container} onPress={onSelect}>
            <Image style={styles.image} source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    );
};

export default PlaceItem;

const styles = StyleSheet.create({
    container: {
        maxWidth: Dimensions.get('window').width / 2,
        flex: 0.475,
        backgroundColor: Colors.primary500,
    },
    image: {
      flex: 1,
      borderBottomLeftRadius: 4,
      borderTopLeftRadius: 4,
      height: 160,
    },
});
