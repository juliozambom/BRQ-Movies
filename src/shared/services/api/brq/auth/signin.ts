import AsyncStorage from '@react-native-async-storage/async-storage';
import { assertUsers } from '../../../../lib/assertUsers';

interface SignInServiceInput {
    username: string;
    password: string;
}

interface SignInServiceOutput {
    token: string;
}

export const SignInService = async (input: SignInServiceInput): Promise<SignInServiceOutput | Error> => {
    // Populate fake users if doesn't exist
    await assertUsers();

    // Fake timeout to simulate a request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let users = JSON.parse(await AsyncStorage.getItem('users') as string) as {
        username: string;
        password: string;
    }[];

    const user = users.find((u) => u.username == input.username);

    if (!user || user.password !== input.password) {
        throw new Error('Usuário ou senha inválidos');
    }

    await AsyncStorage.setItem('access-token', '@fake-token');

    return {
        token: '@fake-token'
    }
}