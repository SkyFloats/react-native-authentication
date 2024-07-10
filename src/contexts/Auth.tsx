import React, { useContext, createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/AuthServices";
import { Alert } from "react-native";

export interface AuthData {
    token: string;
    email: string;
    name: string;
}
interface AuthContextData {
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
    loading: boolean;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData,
);
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authData, setAuth] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFromStorage();
    }, [])

    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem('@AuthData');
        if (auth) {
            setAuth(JSON.parse(auth) as AuthData);
        }
        setLoading(false);
    }
    async function signIn(email: string, password: string): Promise<AuthData>  {
        try {
            const auth = await authService.signIn(email, password);
            setAuth(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
            return auth;
        } catch (error:any) {
            Alert.alert(error.message, 'Tente Novamente');
            throw error;
        }

    }
    async function signOut(): Promise<void> {
        setAuth(undefined);
        AsyncStorage.removeItem('@AuthData');
        return;
    }

    return (
        <AuthContext.Provider value={{ authData, loading,signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}