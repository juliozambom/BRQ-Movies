import { Text, View } from "react-native";
import { TextField } from "./shared/components/TextField";

export default function Index() {
  return (
    <View
      className="items-center justify-center flex-1 bg-background"
    >
      <TextField
        icon={<Text>👋</Text>}
        placeholder="Usuário"
      />

      <TextField
        icon={<Text>👋</Text>}
        placeholder="Usuário"
      />
    </View>
  );
}
