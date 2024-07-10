import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { MyTextInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import logo from '../assets/logo.png';
import { useAuth } from "../contexts/Auth";

export function SignInScreen(){
    const {signIn} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Image 
            style={{width: 200, height: 200}}
            resizeMode="contain"
            source={logo}
            />
            <MyTextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
            <MyTextInput
                secureTextEntry
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
            />
            
            <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
        </View>
    );
}