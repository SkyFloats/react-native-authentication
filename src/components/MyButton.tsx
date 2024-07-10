import React from "react";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from "react-native";

interface MyButtonProps extends TouchableOpacityProps {
    title: string;
}

export function MyButton({ title, style, ...rest }: MyButtonProps) {
    return (
        <TouchableOpacity {...rest} style={[styles.button, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#2378B8',
        borderRadius: 8,
        padding: 20,
    }
});