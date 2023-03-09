import { authStyles } from "../../Screens/authScreens/authSlyles";
const { container, image } = authStyles;
import { View, ImageBackground, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Dimensions } from "react-native";
import { useState, useEffect } from "react";
const KeyboardWrapper = ({ children }) => {
	const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 16 * 2);

	useEffect(() => {
		const subscription = Dimensions.addEventListener("change", ({ window }) => {
			setDimensions(window.width);
		});
		return () => subscription?.remove();
	}, []);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground source={require("../../images/photo_bg.jpeg")} style={image}>
				<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
					<View style={{ ...container, width: dimensions }}>{children}</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
};
export default KeyboardWrapper;
