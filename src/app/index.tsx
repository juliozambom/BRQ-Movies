import { View } from "react-native";
import { TextField } from "../shared/components/TextField";
import { Profile } from "../shared/assets/icons/Profile";
import { Lock } from "../shared/assets/icons/Lock";

export default function Index() {
  return (
    <View
      className="items-center justify-center flex-1 bg-background px-4"
    >
      <TextField
        icon={<Profile size={20} />}
        placeholder="Usuário"
      />

      <TextField
        icon={<Lock size={20} />}
        placeholder="Senha"
        secureTextEntry
      />
    </View>
  );
}
