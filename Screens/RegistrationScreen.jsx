import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Platform,
	Pressable,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialState = {
	login: "",
	email: "",
	password: "",
};

const RegisterScreen = () => {
	// const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);

	const handleSubmit = () => {
		if (state.login === "" || state.email === "" || state.password === "") {
			return Alert.alert("Заповнить поля");
		} else {
			// setIsShowKeyboard(false);
			Keyboard.dismiss();

			console.log(state);
			setState(initialState);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground source={require("../images/photo_bg.jpeg")} style={styles.image}>
				<View style={styles.container}>
					<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
						<View style={styles.avatarWrapper}>
							<Pressable>
								<Ionicons name="add-circle-outline" size={30} color="#FF6C00" style={styles.icon} />
							</Pressable>
						</View>

						<Text style={styles.title}>Реєстрація</Text>
						{/* <KeyboardAvoidingView behavior={Platform.ios === "ios" ? "padding" : "height"}> */}
						<TextInput
							value={state.login}
							onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
							placeholder="Логiн"
							style={styles.input}
						/>
						<TextInput
							value={state.email}
							onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
							placeholder="Адреса електронної пошти"
							style={styles.input}
						/>

						<TextInput
							value={state.password}
							onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
							placeholder="Придумайте пароль"
							style={styles.input}
							secureTextEntry={true}
						/>
						{/* </KeyboardAvoidingView> */}
						<TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit}>
							<Text style={{ color: "#fff" }}>Зареєструватись</Text>
						</TouchableOpacity>

						<View style={styles.subscribe}>
							<Text style={styles.text}>Вже є акаунт? </Text>
							<Pressable>
								<Text style={styles.loginLink}>Увійти</Text>
							</Pressable>
						</View>
					</KeyboardAvoidingView>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};
export default RegisterScreen;
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		justifyContent: "center",
		padding: 16,
		borderRadius: 20,
		paddingBottom: 50,
		marginLeft: 16,
		marginRight: 16,
	},

	image: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		resizeMode: "cover",
	},
	input: {
		marginHorizontal: 16,
		padding: 16,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,
		marginBottom: 16,
		backgroundColor: "#F6F6F6",
		width: 300,
	},
	title: {
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		letterSpacing: 0.01,
		color: "#212121",
		marginBottom: 33,
		marginTop: 92,
	},
	button: {
		marginHorizontal: 16,
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		height: 51,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 43 - 16,
	},
	text: {
		fontSize: 16,
		color: "#212121",
	},
	subscribe: {
		marginTop: 16,
		flexDirection: "row",
		alignSelf: "center",
		textAlign: "center",
	},
	loginLink: {
		fontSize: 16,
		color: "#1B4371",
		// textDecoration: underline,
	},
	avatarWrapper: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		position: "absolute",
		// left: 128,
		top: -60,
		alignSelf: "center",
	},
	icon: {
		top: 70,
		left: 105,
	},
});
