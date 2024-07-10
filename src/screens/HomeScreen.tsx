import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { MyButton } from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title} >
                Essa Tela só pode ser vista por um usúario autenticado
            </Text>
            <MyButton onPress={() => navigation.navigate('Settings')} title="Ir para Configurações" />
            <Text>
                by <Text style={styles.skyText} >SkyFloat</Text>
            </Text>
        </View>
    );
}