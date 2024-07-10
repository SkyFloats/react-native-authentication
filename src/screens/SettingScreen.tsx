import React from "react";
import { View, Text } from "react-native";
import { MyButton } from "../components/MyButton";
import { styles } from "./styles";
import { useAuth } from "../contexts/Auth";

export function SettingScreen() {
    const { signOut } = useAuth();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>
            <MyButton 
            onPress={signOut} 
            style={{ backgroundColor: 'red' }} 
            title="Sair do App" />
        </View>
    )
}