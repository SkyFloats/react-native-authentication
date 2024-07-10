import {AuthData} from '../contexts/Auth'

async function signIn(email: string, password: string): Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === '123456'){
                resolve({
                    token:'fake-token',
                    email,
                    name: 'Daniel Lucas',
                });
            }else {
                reject(new Error('Credenciais Inválidas'))
            }
        }, 500)
    });
}
export const authService = {signIn};