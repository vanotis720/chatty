import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AppNavigation from './src/navigations/AppNavigation';
import AuthNavigation from './src/navigations/AuthNavigation';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from './src/styles/colors';

export default function App() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged((user) => {
			setUser(user);
			if (initializing) setInitializing(false);
		});
		return subscriber;
	}, []);

	if (initializing) return <ActivityIndicator color={colors.primary} />;

	return (
		<NavigationContainer>
			{
				user ? <AppNavigation /> : <AuthNavigation />
			}
		</NavigationContainer>
	);
}
