import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import { init } from '../utils/database';

function useInitDatabase() {
    const [dbInitialized, setDbInitialized] = useState(false);

    useEffect(() => {
        init()
            .then(() => {
                setDbInitialized(true);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    if (!dbInitialized) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
}

export default useInitDatabase;
