import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PlaceItemProps, HomeScreenNavigationProp } from '../../common/types';
import { Colors } from '../../constants/colors';

const PlaceItem: React.FC<PlaceItemProps> = ({ place }): JSX.Element => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    function displayPlace() {
        navigation.navigate('PlaceDetails', {
            id: place.id
        });
    }

    return (
        <Pressable style={styles.container} onPress={displayPlace}>
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
        backgroundColor: Colors.primary500
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 160
    }
});
