import { Pressable, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { IconButtonProps } from '../../common/types';
import { Colors } from '../../constants/colors';

const IconButton: React.FC<IconButtonProps> = ({
    onPress,
    children,
    ...rest
}): JSX.Element => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed
            ]}
            onPress={onPress}
        >
            <Ionicons style={styles.icon} {...rest} />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colors.primary100
    },
    icon: {
        color: Colors.primary100,
        marginRight: 5
    },
    text: {
        color: Colors.primary100
    },
    pressed: {
        opacity: 0.7
    }
});
