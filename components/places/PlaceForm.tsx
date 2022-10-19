import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

const PlaceForm: React.FC = () => {
    const [enteredTitle, setEnteredTitle] = useState<string>('');

    function handleEnteredTitle(text: string) {
        setEnteredTitle(text);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleEnteredTitle}
                    value={enteredTitle}
                />
                <ImagePicker />
                <LocationPicker />
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
    },
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
