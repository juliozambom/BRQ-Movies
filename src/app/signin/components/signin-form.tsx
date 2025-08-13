import { Alert, Text, TouchableOpacity } from "react-native"
import z from "zod";
import { Lock } from "@/src/shared/assets/icons/Lock"
import { Profile } from "@/src/shared/assets/icons/Profile"
import { TextField } from "@/src/shared/components/TextField"
import { Button } from "@/src/shared/components/Button"
import { useState } from "react"
import { SignInService } from "@/src/shared/services/auth/signin"
import { router } from "expo-router";

const SignInSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const SignInForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isButtonDisabled = username === '' || password === '';

    async function submitForm() {
        try {
            const input = {
                username,
                password
            }

            const data = SignInSchema.parse(input);

            setIsLoading(true);
            await SignInService({ username: data.username, password: data.password });

            router.push('/home')
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Ocorreu um erro', error.message);
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <TextField
                icon={<Profile size={20} />}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />

            <TextField
                icon={<Lock size={20} />}
                placeholder="Senha"
                secureTextEntry
                className="mt-12"
                value={password}
                onChangeText={setPassword}
                keyboardType="numeric"
            />

            <Button
                title="Entrar"
                className="mt-12"
                disabled={isButtonDisabled}
                isLoading={isLoading}
                onPress={submitForm}
            />

            <TouchableOpacity
                hitSlop={8}
                className="mt-12"
            >
                <Text className="text-secondary font-medium">Esqueci a senha</Text>
            </TouchableOpacity>
        </>
    )
}