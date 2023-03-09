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
import KeyboardWrapper from "../../components/KeyboardWrapper/KeyboardWrapper";

import { authStyles } from "./authSlyles";
const { form, input, title, button, text, subscribe, loginLink, avatarWrapper, icon } = authStyles;

const initialState = {
	login: "",
	email: "",
	password: "",
};
const initialFocus = {
	login: false,
	email: false,
	password: false,
};

const RegisterScreen = () => {
	// const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);
	const [isKeyboard, setIsKeyboard] = useState(false);
	const [isFocus, setIsFocus] = useState(initialFocus);

	const handleOnFocus = inputName => {
		setIsKeyboard(true);
		setIsFocus(prevState => ({ ...prevState, [inputName]: true }));
	};

	const handleEndFocus = inputName => {
		setIsKeyboard(false);
		setIsFocus(prevState => ({ ...prevState, [inputName]: false }));
	};
	const handleSubmit = () => {
		const { login, email, password } = state;
		if (login === "" || email === "" || password === "") {
			return Alert.alert("Заповнить поля");
		} else {
			// Keyboard.dismiss();
			setIsKeyboard(false);

			console.log(state);
			setState(initialState);
		}
	};

	return (
		<KeyboardWrapper>
			<View style={form}>
				<View style={avatarWrapper}>
					<Pressable>
						<Ionicons name="add-circle-outline" size={30} color="#FF6C00" style={icon} />
					</Pressable>
				</View>
				<Text style={title}>Реєстрація</Text>
				<TextInput
					value={state.login}
					keyboardType="default"
					onChangeText={value => setState(prevState => ({ ...prevState, login: value.trim() }))}
					placeholder="Логiн"
					style={{
						...input,
						borderColor: isFocus.login ? "#FF6C00" : "#E8E8E8",
					}}
					onFocus={() => handleOnFocus("login")}
					onEndEditing={() => handleEndFocus("login")}
				/>
				<TextInput
					value={state.email}
					onChangeText={value => setState(prevState => ({ ...prevState, email: value.trim() }))}
					placeholder="Адреса електронної пошти"
					keyboardType="default"
					style={{
						...input,
						borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
					}}
					onFocus={() => handleOnFocus("email")}
					onEndEditing={() => handleEndFocus("email")}
				/>
				<TextInput
					value={state.password}
					onChangeText={value => setState(prevState => ({ ...prevState, password: value.trim() }))}
					placeholder="Придумайте пароль"
					style={{
						...input,
						borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
					}}
					keyboardType="default"
					secureTextEntry={true}
					onFocus={() => handleOnFocus("password")}
					onEndEditing={() => handleEndFocus("password")}
				/>

				<TouchableOpacity style={button} activeOpacity={0.5} onPress={handleSubmit}>
					<Text style={{ color: "#fff" }}>Зареєструватись</Text>
				</TouchableOpacity>
				<View style={subscribe}>
					<Text style={text}>Вже є акаунт? </Text>
					<Pressable>
						<Text style={loginLink}>Увійти</Text>
					</Pressable>
				</View>
			</View>
		</KeyboardWrapper>
	);
};
export default RegisterScreen;
