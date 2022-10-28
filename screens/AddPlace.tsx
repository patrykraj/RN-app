import { useNavigation } from '@react-navigation/native';

import { IPlace } from '../common/types';
import PlaceForm from '../components/places/PlaceForm';
import { insertPlace } from '../utils/database';
import { HomeScreenNavigationProp } from '../common/types';
import { useLocationContext } from '../context/index';

function AddPlace() {
    const { setSavedLocations } = useLocationContext();
    const navigation = useNavigation<HomeScreenNavigationProp>();

    async function onSavePlace(place: IPlace) {
        try {
            await insertPlace(place);
            setSavedLocations((prevState) => [...prevState, place]);
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    }

    return <PlaceForm onSavePlace={onSavePlace} />;
}

export default AddPlace;
