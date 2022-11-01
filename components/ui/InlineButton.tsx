import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

import { InlineButtonProps } from '../../common/types';

const InlineButton: React.FC<InlineButtonProps> = ({ onPress, ...rest }) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons {...rest} />
        </Pressable>
    );
};

export default InlineButton;
