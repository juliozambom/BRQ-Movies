import { Lock } from "@/src/shared/assets/icons/Lock"
import { Profile } from "@/src/shared/assets/icons/Profile"
import { TextField } from "@/src/shared/components/TextField"
import { Button } from "@/src/shared/components/Button"

export const SignInForm = () => {
    return (
        <>
            <TextField
                icon={<Profile size={20} />}
                placeholder="Usuário"
            />

            <TextField
                icon={<Lock size={20} />}
                placeholder="Senha"
                secureTextEntry
                className="mt-12"
            />

            <Button
                title="Entrar"
                className="mt-12"
            />
        </>
    )
}