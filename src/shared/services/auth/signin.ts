import AsyncStorage from '@react-native-async-storage/async-storage';
import { assertUsers } from '../../lib/assertUsers';

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

    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    if (user.password !== input.password) {
        throw new Error('Senha incorreta');
    }

    return {
        token: '@fake-token'
    }
}