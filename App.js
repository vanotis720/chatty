import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AppNavigation from './src/navigations/AppNavigation';
import AuthNavigation from './src/navigations/AuthNavigation';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function App() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	const appIsReady = async () => {
		await SplashScreen.hideAsync();
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged((user) => {
			setUser(user);
			console.log('here');
			appIsReady();
			if (initializing) setInitializing(false);
		});
		return subscriber;
	}, []);

	if (initializing) return null;

	return (
		<NavigationContainer>
			{
				user ? <AppNavigation /> : <AuthNavigation />
			}
		</NavigationContainer>
	);
}
