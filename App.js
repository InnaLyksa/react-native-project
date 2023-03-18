import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./src/Screens/authScreens/LoginScreen";
import RegistrationScreen from "./src/Screens/authScreens/RegistrationScreen";

import { fonts } from "./src/utils/fonts";

export default function App() {
	const [fontsLoaded] = useFonts(fonts);
	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);
	if (!fontsLoaded) {
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}

	const MainStack = createStackNavigator();
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
				<MainStack.Screen name="Registration" component={RegistrationScreen} />

				<MainStack.Screen name="Login" component={LoginScreen} />
				{/* <MainStack.Screen name="home" component={Home} /> */}
			</MainStack.Navigator>
		</NavigationContainer>
	);
	// }
}
