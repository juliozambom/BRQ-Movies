import { router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function Index() {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/signin")
      }}
      className="items-center justify-center flex-1 bg-background px-4"
    >
      <Text>Hello</Text>
    </TouchableOpacity>
  )
}
