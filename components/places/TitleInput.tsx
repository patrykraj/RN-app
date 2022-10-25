import React, { useContext } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { LocationContext } from '../../context';
import { LocationContextType } from '../../common/types';

const TitleInput: React.FC = () => {
    const { locationTitle, setLocationTitle } =
        useContext<LocationContextType>(LocationContext);

    function handleEnteredTitle(text: string) {
        setLocationTitle(text);
    }

    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleEnteredTitle}
                value={locationTitle}
            />
        </View>
    );
};

export default TitleInput;

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    },
    label: {
        color: Colors.primary50,
        fontWeight: 'bold',
        marginBottom: 4
    }
});
