// import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
	return (
		<>
			<RegistrationScreen />
			{/* <LoginScreen /> */}
		</>
	);
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
// 				</KeyboardAvoidingView>
// 				<Button title={"Login"} style={styles.input} onPress={onLogin} />
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
