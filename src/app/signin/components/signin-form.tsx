import { Lock } from "@/src/shared/assets/icons/Lock"
import { Profile } from "@/src/shared/assets/icons/Profile"
import { TextField } from "@/src/shared/components/TextField"
import { Button } from "@/src/shared/components/Button"
import { Text, TouchableOpacity } from "react-native"
import { useState } from "react"

export const SignInForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isButtonDisabled = username === '' || password === '';

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
            />

            <Button
                title="Entrar"
                className="mt-12"
                disabled={isButtonDisabled}
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