import LoginScreen from "./src/Screens/authScreens/LoginScreen";
import { useEffect } from "react";
// import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// import RegistrationScreen from "./src/Screens/authScreens/RegistrationScreen";

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

	return (
		<>
			{/* <RegistrationScreen /> */}
			<LoginScreen />
		</>
	);
	// }
}

// import React, { useState } from "react";
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	TextInput,
// 	KeyboardAvoidingView,
// 	Platform,
// 	TouchableWithoutFeedback,
// 	Keyboard,
// 	Alert,
// 	Button,
// } from "react-native";

// export default App = () => {
// 	const [name, setName] = useState("");
// 	const [password, setPassword] = useState("");
// 	const handleName = text => setName(text);
// 	const handlePassword = text => setPassword(text);

// 	const onLogin = () => {
// 		Alert.alert("Credentials", `${name} + ${password}`);
// 	};
// 	return (
// 		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// 			<View style={styles.container}>
// 				<KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
// 					behavior={Platform.OS == "ios" ? "padding" : "height"}
// 				>
// 					<TextInput style={styles.input} placeholder="Username" value={name} onChangeText={handleName} />
// 					<TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry={true} onChangeText={handlePassword} />

// 					<Button title={"Login"} style={styles.input} onPress={onLogin} />
// 				</KeyboardAvoidingView>
// 			</View>
// 		</TouchableWithoutFeedback>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "flex-end",
// 		paddingBottom: 30,
// 	},
// 	title: {
// 		marginTop: 25,
// 		paddingVertical: 8,
// 		borderWidth: 4,
// 		borderColor: "#20232a",
// 		borderRadius: 6,
// 		backgroundColor: "#61dafb",
// 		color: "#20232a",
// 		textAlign: "center",
// 		fontSize: 30,
// 		fontWeight: "bold",
// 	},
// 	input: {
// 		marginTop: 25,
// 		paddingVertical: 8,
// 		borderWidth: 4,
// 		borderColor: "#20232a",
// 		borderRadius: 6,
// 		backgroundColor: "#61dafb",
// 		color: "#20232a",
// 		textAlign: "center",
// 		fontSize: 30,
// 		fontWeight: "bold",
// 	},
// });
