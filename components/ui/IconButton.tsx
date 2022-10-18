import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet } from 'react-native';

import { IconButtonProps } from '../../common/types';

const IconButton: React.FC<IconButtonProps> = ({ onPress, ...rest }) => {
    return <Pressable onPress={onPress}>
        <Ionicons {...rest} />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    
})
