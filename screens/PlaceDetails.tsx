import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import { IPlace, RouteProps } from '../common/types';
import { fetchPlaceDetails } from '../utils/database';

const PlaceDetails: React.FC<RouteProps> = ({ route }) => {
    const [place, setPlace] = useState<IPlace | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchPlace() {
        setIsLoading(true);

        try {
            const response = await fetchPlaceDetails(route.params.id);
            setPlace(response);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPlace();
    }, []);

    if (!place)
        return (
            <View>
                <Text>NOT FOUND</Text>
            </View>
        );

    return (
        <View>
            <Text>{isLoading ? 'LOADING...' : place.address}</Text>
        </View>
    );
};

export default PlaceDetails;
