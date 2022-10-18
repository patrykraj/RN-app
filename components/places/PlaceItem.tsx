import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { PlaceItemProps } from '../../common/types';

const PlaceItem: React.FC<PlaceItemProps> = ({ place, onSelect }: any): JSX.Element => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  
});
