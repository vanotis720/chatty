import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from '../screens/MessageScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator
            initialRouteName="Messages"
        // screenOptions={{
        //     headerStyle: {
        //         backgroundColor: colors.primary,
        //     },
        //     headerTintColor: '#eee',
        // }}
        >
            <Stack.Screen
                name="Messages"
                component={MessageScreen}
                options={{
                    title: 'Messages',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    title: 'Chat',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}