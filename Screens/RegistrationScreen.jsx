import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	Platform,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Dimensions,
	Alert,
} from "react-native";

const initialState = {
	login: "",
	email: "",
	password: "",
};

const RegisterScreen = () => {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);
	const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 16 * 2);

	useEffect(() => {
		const onChange = () => {
			const width = Dimensions.get("window").width - 16 * 2;
			setDimensions(width);
		};
		Dimensions.addEventListener("change", onChange);
		// return () => {
		// 	Dimensions.removeEventListener("change", onChange);
		// };
	}, []);

	const handleSubmit = () => {
		if (state.login === "" || state.email === "" || state.password === "") {
			return Alert.alert("Заповнить поля");
		} else {
			setIsShowKeyboard(false);
			Keyboard.dismiss();

			console.log(state);
			setState(initialState);
		}
	};

	const keyboardHide = () => {
		Keyboard.dismiss();
		setIsShowKeyboard(false);
	};

	return (
		<TouchableWithoutFeedback onPress={keyboardHide}>
			<View style={styles.container}>
				<ImageBackground source={require("../images/photo_bg.jpeg")} style={styles.image}>
					<KeyboardAvoidingView behavior={Platform.OS === "android" ? "height" : "padding"}>
						<View style={styles.wrapper}>
							<View style={{ ...styles.form, width: dimensions }}>
								<View style={styles.avatar}></View>

								<Text style={styles.title}>Реєстрація</Text>

								<TextInput
									value={state.login}
									onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
									placeholder="Логiн"
									style={styles.input}
									onFocus={() => {
										setIsShowKeyboard(true);
									}}
								/>
								<TextInput
									value={state.email}
									onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
									placeholder="Адреса електронної пошти"
									style={styles.input}
									onFocus={() => {
										setIsShowKeyboard(true);
									}}
								/>

								<TextInput
									value={state.password}
									onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
									placeholder="Придумайте пароль"
									style={styles.input}
									secureTextEntry={true}
									onFocus={() => {
										setIsShowKeyboard(true);
									}}
								/>

								<TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit}>
									<Text style={{ color: "#fff" }}>Зареєструватись</Text>
								</TouchableOpacity>

								<Text style={styles.text}>
									Вже є акаунт? <Text style={styles.text}>Увійти</Text>
								</Text>
							</View>
						</View>
					</KeyboardAvoidingView>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};
export default RegisterScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	wrapper: {
		backgroundColor: "#fff",
		borderRadius: 25,
		position: "relative",
		minHeight: 500,
	},
	form: {
		justifyContent: "center",
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
		textAlign: "center",
		marginTop: 16,
		fontSize: 16,
		color: "#1B4371",
	},
	// loginLink: {},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		position: "absolute",
		left: 128,
		top: -60,
	},
});
