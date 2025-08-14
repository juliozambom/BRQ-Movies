import { Image, View } from "react-native";
import icon from "@/assets/images/icon.png";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Index() {
  async function checkAuth() {
    const token = await AsyncStorage.getItem('access-token');

    if (!token) {
      return false;
    }

    return true;
  }

  useEffect(() => {
    (async () => {
      const isLogged = await checkAuth();

      if (!isLogged) {
        router.push('/signin')
        return;
      }

      router.push('/home')
    })()
  }, [])

  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Image source={icon} className="w-64 h-64" />
    </View>
  )
}
