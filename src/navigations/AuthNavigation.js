import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectionScreen from '../screens/auth/SelectionScreen';
import SigninScreen from '../screens/auth/SigninScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {

    return (
        <Stack.Navigator
            initialRouteName="SelectionScreen"
        // screenOptions={{
        //     headerStyle: {
        //         backgroundColor: colors.primary,
        //     },
        //     headerTintColor: '#eee',
        // }}
        >
            <Stack.Screen
                name="SelectionScreen"
                component={SelectionScreen}
                options={{
                    title: 'Authentification',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{
                    title: 'Mot de passe oublié',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={{
                    title: 'Mot de passe oublié',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}