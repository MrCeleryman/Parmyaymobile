// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "./components";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Page extends Component {
	static navigationOptions = {
		title: "Rate a Parmy",
		drawerIcon: () => <Icon name="pencil-box-outline"/>,
		drawerLabel: "Rate a Parmy"
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Parmyay"s premier rating service.
					Do YOU have the best Parmy?
				</Text>
				<Button text="Go back home" onPress={() => this.props.navigation.goBack()} />
			</View>
		);
	}
}
