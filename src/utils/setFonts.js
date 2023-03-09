import { fonts } from "./fonts";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export const setFonts = () => {
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
};
