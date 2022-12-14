import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import Map from './screens/Map';
import InlineButton from './components/ui/InlineButton';
import { Colors } from './constants/colors';
import LocationProvider from './context';
import useInitDatabase from './hooks';
import PlaceDetails from './screens/PlaceDetails';

const Stack = createNativeStackNavigator();

export default function App() {
    useInitDatabase();

    return (
        <>
            <StatusBar style="dark" />
            <LocationProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: Colors.primary500 },
                            headerTintColor: Colors.gray700,
                            contentStyle: { backgroundColor: Colors.gray700 }
                        }}
                    >
                        <Stack.Screen
                            name="Home"
                            component={AllPlaces}
                            options={({ navigation }) => ({
                                title: 'Your Favorite Places',
                                headerRight: ({ tintColor }) => (
                                    <InlineButton
                                        name="add"
                                        size={24}
                                        color={tintColor}
                                        onPress={() =>
                                            navigation.navigate('AddPlace')
                                        }
                                    />
                                )
                            })}
                        />
                        <Stack.Screen name="AddPlace" component={AddPlace} />
                        <Stack.Screen name="Map" component={Map} />
                        <Stack.Screen
                            name="PlaceDetails"
                            component={PlaceDetails}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </LocationProvider>
        </>
    );
}
